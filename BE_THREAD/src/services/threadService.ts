import { Thread } from "../entity/thread";
import { Repository } from "typeorm/repository/Repository";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";

class ThreadService {
    private readonly threadRepository: Repository<Thread> = 
    AppDataSource.getRepository(Thread);
    
    async find(req: Request, res: Response): Promise<Response>  {
        try {
            const threads = await this.threadRepository.find();
            return res.status(200).json({
                "message": "success",
                 status : 200,
                 data : {threads}
            });
            
        } catch (error) {
            console.error("Error while getting threads:", error);
            return res.status(500).json({ error: "Error while getting threads" });
        }       
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            
            const { content, image, userId } = req.body;
            const newThread = this.threadRepository.create({
                content,
                image: image || null,
                // user:{
                //     id: userId
                // }
            });
    
            await this.threadRepository.save(newThread);
    
            return res.status(201).json({
                message: "Thread created successfully",
                status: 201,
                data: { thread: newThread }
            });
        } catch (error) {
            console.error("Error while creating thread:", error);
            return res.status(500).json({ error: "Error while creating thread" });
        }
    }


}

export default new ThreadService();