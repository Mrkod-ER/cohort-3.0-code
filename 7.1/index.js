const express = require("express");
const bcrypt = require('bcrypt');
const { z } = require('zod');
const { UserModel, TodoModel } = require('./db');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const jwt_secret = "hello";
const app = express();

// Note: mongodb+srv:// blocked by router (SRV DNS queries refused). Using direct connection instead.
mongoose.connect("mongodb+srv://abhisheksingh97606_db_user:123@cluster0.f2zemog.mongodb.net/todos-application")
    .then(() => {
        console.log("✅ Connected to MongoDB");
    })
    .catch((err) => {
        console.error("❌ MongoDB connection failed:");
        console.error(err);
    });

app.use(express.json());

function auth(req, res, next) {
    const token = req.headers.token; 
    
    const decodedData = jwt.verify(token, jwt_secret);
    if(decodedData) {
        req.userId = decodedData.id;
        next();
    }
    else {
            res.status(403).json({
            message: "invalid credentials"
        })
    }
}


app.post("/signup", async function (req, res) {
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(), 
        name: z.string().min(3).max(100), 
        password: z.string()
    })
    // const parsedData = requiredBody.parse(req.body);
    const parseDatawithsuccess = requiredBody.safeParse(req.body);
    
    if(!parseDatawithsuccess.success) {
        res.send({
            message: "incorrect format",
            error: parseDatawithsuccess.error
        })
        return; 
    } 
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name; 

    try {
        const hashedPassword = await bcrypt.hash(password, 5);
        console.log(hashedPassword);

        const data = await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        })
    }
    catch(e) {
        res.json({
            message: e.message
        })
    }

    

    res.json({
        message: "you are logged in"
    })
})

app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email
    });
    if(!user){
        res.status(403).json({
            message: "user does not exist in our db"
        })
        return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
        const token = jwt.sign({
            id: user._id.toString()
        }, jwt_secret);
        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "incorrect credentials"
        })
    }
})

app.post("/todo", auth,async function (req, res) {
    const userId = req.userId; 
    const title = req.body.title; 
    const done = req.body.done; 

    await TodoModel.create({
        title: title, 
        userId: userId, 
        done: done
    })

    res.json({
        message: "todo is created"
    })
})

app.get("/todos", auth, async function (req, res) {
    const userId = req.userId; 

    const todos = await TodoModel.find({
        userId: userId
    });

    res.json({
        todos
    })
})


app.listen(3000);