import { Request, Response } from "express";
import userService from "../services/userService";

class userController {
    create(req: Request, res: Response) {
		userService.create(req, res);
	}
    login(req: Request, res: Response) {
		userService.login(req, res);
	}
	check(req: Request, res: Response) {
		userService.check(req, res);
	}
	logout(req: Request, res: Response) {
		userService.logout(req, res);
	}
}

export default new userController();