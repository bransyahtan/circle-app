import { Request, Response, Router } from "express";
// import threadController from "../controllers/threadController";
import userController from "../controllers/userController";
import authMiddleware from "../middlewares/verifyToken"

const userRoute = Router();


userRoute.post("/register", userController.create);
userRoute.post("/login", userController.login);
userRoute.get("/check", authMiddleware.Authentication, userController.check)
userRoute.get("/logout", userController.logout);
userRoute.get("/users", userController.find);
userRoute.get("/users/:id", authMiddleware.Authentication, userController.findOne);
userRoute.delete("/users/:id", authMiddleware.Authentication, userController.delete);



export default userRoute;
