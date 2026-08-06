const { Router } = require('express');
const bcrypt = require('bcrypt');
const { z } = require('zod');
const dotenv = require('dotenv'); dotenv.config();
const jwt = require('jsonwebtoken');
const jwt_secret = process.env.JWT_SECRET;
const { userModel } = require('../db');
const userRouter = Router();

userRouter.post("/signup", async function(req, res) {
    const user = z.object({
        email: z.string().min(3).max(100).email(),
        password: z.string().min(3).max(100),
        firstName: z.string(), 
        lastName: z.string()
    });

    const result = user.safeParse(req.body);
    if(!result.success){
        res.send({
            error: result.error
        })
        return
    }
    const {email, password, firstName, lastName} = result.data; 
    const hashedPassword = await bcrypt.hash(password, 5);

    await userModel.create({
        email: email, 
        password: hashedPassword,
        firstName: firstName,
        lastName: lastName
    }) 

    res.json({
        message: "signup successfully"
    })
})

userRouter.post("/signin", async function(req, res) {
    const {email, password} = req.body; 
    const user = await userModel.findOne({
        email: email
    })
    const userFound = await bcrypt.compare(password, user.password);

    if(!userFound) {
        res.status(403).json({
            message: "invalid credentials"
        })
    }
    const token = jwt.sign(user._id, jwt_secret);
    // do cookie based logic
    res.json({
        token: token
    })
})

userRouter.get("/purchases", function(req, res) {

})

module.exports = {
    userRouter: userRouter
}