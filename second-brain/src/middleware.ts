import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken"
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
        if(typeof decoded === "string") {
            res.status(403).json({
                message: "you are not logged in"
            })
            return; 
        }
        req.userId = (decoded as JwtPayload).id;
        next(); 
    }
    else {
        res.status(403).json({
            message: "You are not logged in"
        })
    }
}