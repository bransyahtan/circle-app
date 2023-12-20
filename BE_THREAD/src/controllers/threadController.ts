import { Request, Response } from "express";
import threadService from "../services/threadService";

class threadController {
    find(req: Request, res: Response) {
        threadService.find(req, res);
    }
    create(req: Request, res: Response) {
		threadService.create(req, res);
	}
}

export default new threadController();