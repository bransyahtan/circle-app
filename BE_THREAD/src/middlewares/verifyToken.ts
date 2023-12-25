import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken'

export default new class authMiddleware {
    Authentication(req: Request, res: Response, next: NextFunction): Response {
        const header = req.headers.authorization

        if (!header || !header.startsWith("Bearer")){
            return res.status(401).json({
                status:401,
                message: "Unauthorized"
            })
        }
        const token = header.split (" ")[1]

        try {
            const loginSession = jwt.verify(token, "acong")
            res.locals.loginSession = loginSession

            next()
        } catch (error) {
            return res.status(401).json({ 
                message: "token not valid",
                status: 401,
            })   
        }
    }
}