import { Request, Response, Router } from "express";
import threadController from "../controllers/threadController";
import authMiddleware from "../middlewares/verifyToken"

const threadRouter = Router();



threadRouter.get("/threads", threadController.find);
threadRouter.post(
	"/threads",
	authMiddleware.Authentication,
	// uploadImage.single("image"),
	threadController.create
);

export default threadRouter;