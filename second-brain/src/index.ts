declare global {
    namespace Express {
        export interface Request {
            userId: string; 
        }
    }
}


import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { Content, Link, User } from "./db.js"
import { userMiddleware } from "./middleware.js";
import { random } from "./utils.js";





dotenv.config();

const jwt_secret = process.env.JWT_SECRET; 

if(!jwt_secret) {
    throw new Error("jwt_secret is not defined")
}

const db_url: string | undefined = process.env.DATABASE_URL;

if (!db_url) {
    throw new Error("DATABASE_URL is not defined");
}

mongoose.connect(db_url);

const app = express();
app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
    try {
        const {username, password} = req.body; 
        const hashedPassword = await bcrypt.hash(password, 4);

        await User.create({
            username: username, 
            password: hashedPassword
        }) 
        res.status(200).json({
            msg: "user is signed up"
        })
    }
    catch(e: any) {
        // Check specifically for duplicate key error (MongoDB error code 11000)
        if (e.code === 11000) {
            res.status(409).json({ message: "User already exists" })
        } else {
            res.status(500).json({ message: "Internal server error" })
        }
    }
})

app.post("/api/v1/signin", async (req, res) => {
    const {username, password} = req.body; 

    const response = await User.findOne({
        username: username
    })

    if(!response){
        res.status(404).json({
            message: "username doesnot exists"
        })
        return;
    }
    const passRes = await bcrypt.compare(password, response.password);

    if(!passRes) {
        res.status(401).json({
            message: "incorrect password"
        })
    }

    const token = jwt.sign({
        id: response._id
    }, jwt_secret)

    res.status(200).json({
        token: token,
        message: "user is signed in"
    })

})


app.post("/api/v1/content", userMiddleware,async (req, res) => {
    const {link, type, title} = req.body; 

    await Content.create({
        link: link, 
        type: type,
        title: title,
        //@ts-ignore
        userId: req.userId,
        tags: []
    })

    return res.json({
        message: "content added"
    })
})

app.get("/api/v1/content",userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId; 
    const content = await Content.find({
        userId: userId
    }).populate("userId", "username");
    res.status(200).json({
        content
    })
})

app.delete("/api/v1/content",userMiddleware, async (req, res) => {
    const contentId = req.body.contentId; 

    await Content.deleteMany({
        contentId, 
        userId: req.userId
    })

    res.json({
        message: "content deleted"
    })

})

app.post("/api/v1/brain/share",userMiddleware, async (req, res) => {
    const share = req.body.share; 
    if(share) {
        const existingLink = await Link.findOne({
            userId: req.userId
        });
        if(existingLink) {
            res.json({
                hash: existingLink.hash
            })
            return; 
        }
       
        const hash = random(10);
        await Link.create({
            userId: req.userId,
            hash: hash
        })
        
        res.json({
        message: "/share/" + hash
        })
         

    } else {
        Link.deleteOne({
            userId: req.userId
        });

        res.json({
            message: "removed link"
        })
    }

})

app.get("/api/v1/brain/:shareLink",userMiddleware, async (req, res) => {
    const hash = req.params.shareLink as string; 

    const link = await Link.findOne({
        hash
    });

    if(!link) {
        res.status(411).json({
            message: "Sorry incorrect input"
        })
        return; 
    }
    const content = await Content.find({
        userId: link.userId
    })

    const userData = await User.findOne({
        _id: link.userId
    })

    if(!userData || !content) {
        res.status(411).json({
            message: "sorry user or content does not exist"
        })
        return; 
    }

    res.json({
        username: userData.username, 
        content: content
    })

})

app.listen(3000);