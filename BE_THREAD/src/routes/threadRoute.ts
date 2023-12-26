import { Request, Response, Router } from "express";
import threadController from "../controllers/threadController";
import authMiddleware from "../middlewares/verifyToken"

const threadRouter = Router();



threadRouter.get("/threads", threadController.find);
threadRouter.get("/threads/:id", threadController.findOne);
threadRouter.post(
	"/threads",
	authMiddleware.Authentication,
	// uploadImage.single("image"),
	threadController.create
);
threadRouter.patch("/threads/:id", authMiddleware.Authentication, threadController.update);
threadRouter.delete("/threads/:id", authMiddleware.Authentication, threadController.delete)

export default threadRouter;