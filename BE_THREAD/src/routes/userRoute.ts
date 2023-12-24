import { Request, Response, Router } from "express";
// import threadController from "../controllers/threadController";
import userController from "../controllers/userController";
import authMiddleware from "../middlewares/verifyToken"

const userRoute = Router();


userRoute.post("/register", userController.create);
userRoute.post("/login", userController.login);
userRoute.get("/check", authMiddleware.Authentication, userController.check)
userRoute.get("/logout", userController.logout);



export default userRoute;
