import { Request, Response } from "express";
import threadService from "../services/threadService";

class threadController {
    find(req: Request, res: Response) {
        threadService.find(req, res);
    }
    findOne(req: Request, res: Response) {
        threadService.findOne(req, res);
    }
    create(req: Request, res: Response) {
		threadService.create(req, res);
	}
    update(req: Request, res: Response) {
		threadService.update(req, res);
	}
    delete(req: Request, res: Response) {
		threadService.delete(req, res);
	}
}

export default new threadController();