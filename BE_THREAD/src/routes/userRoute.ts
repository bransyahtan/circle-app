import { Request, Response, Router } from "express";
import threadController from "../controllers/threadController";
import userController from "../controllers/userController";

const userRoute = Router();


userRoute.post("/register", userController.create);
userRoute.post("/login", userController.login);


export default userRoute;
