import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();

const jwt_secret = process.env.JWT_SECRET; 

if(!jwt_secret) {
    throw new Error("jwt_secret is empty");
}

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string, jwt_secret); 

    if(decoded) {
        //@ts-ignore
        req.userId = decoded.id;
        next(); 
    }
    else {
        res.status(403).json({
            message: "You are not logged in"
        })
    }
}