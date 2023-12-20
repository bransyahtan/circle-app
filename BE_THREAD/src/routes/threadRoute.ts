import { Request, Response, Router } from "express";
import threadController from "../controllers/threadController";

const threadRouter = Router();



threadRouter.get("/threads", threadController.find);
threadRouter.post(
	"/threads",
	// Auth.authenticate,
	// uploadImage.single("image"),
	threadController.create
);

export default threadRouter;