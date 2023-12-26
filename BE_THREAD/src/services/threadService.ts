import { Thread } from "../entity/thread";
import { Repository } from "typeorm/repository/Repository";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { createThreadSchema, updateThreadSchema } from "../utils/threadValidator";

class ThreadService {
    private readonly threadRepository: Repository<Thread> = 
    AppDataSource.getRepository(Thread);
    
    async find(req: Request, res: Response): Promise<Response>  {
        try {
            const threads = await this.threadRepository.find({relations : ['user']});
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

    async findOne(req: Request, res: Response): Promise<Response> {
        try {
            const requstedThreadId = parseInt(req.params.id);

            const thread = await this.threadRepository.findOne({
                where: { id: requstedThreadId },
                relations: ["user"],
            });

            if (!thread) {
                return res.status(404).json({ error: "User not found" });
            }
    
            return res.status(200).json(thread);
            
        } catch (error) {
            console.error("Error while getting threads:", error);
            return res.status(500).json({ error: "Error while getting threads" });
        }
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const loginSession = res.locals.loginSession;
            const image = "lalala.jpg"
            const data = {
                content: req.body.content,
                user : loginSession.user.id,
                image
            };

            const {error} = createThreadSchema.validate(data);
            if (error) {
                return res.status(400).json({
                    message: error.message,
                })
            }
            const newThread = this.threadRepository.create(data);
    
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

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const userId = res.locals.loginSession.user.id; 
            const threadId = parseInt(req.params.id);
            
            const thread = await this.threadRepository.findOne({
                where: { id: threadId },
                relations: ["user"], 
            });
    
            if (!thread) {
                return res.status(404).json({ error: "Thread not found" });
            }
    
            if (thread.user.id !== userId) {
                return res.status(403).json({ error: "Permission denied. You can only update your own threads." });
            }
    
            const data = req.body;
            const { error, value } = updateThreadSchema.validate(data);
    
            if (error) {
                return res.status(400).json({ error: error.details[0].message });
            }
    
            thread.content = value.content;
            thread.image = value.image;
    
          
            const updatedThread = await this.threadRepository.save(thread);
    
            return res.status(200).json(updatedThread);
        } catch (error) {
            console.error("Error while updating thread:", error);
            return res.status(500).json({ error: "Error while updating thread" });
        }
    }

   
    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const loggedInUserId = res.locals.loginSession.user.id;
            const requestedThreadId = parseInt(req.params.id);
            // Cek keberadaan thread
            const threadRes = await this.threadRepository.findOne({
                where: { id: requestedThreadId },
                relations: ["user"], 
            });
    
            // Periksa apakah pengguna yang masuk adalah pemilik thread
            if (loggedInUserId !== threadRes.user.id) {
                return res.status(403).json({ error: "Unauthorized: You can only delete your own thread" });
            }
    
            // Hapus thread
            await this.threadRepository.delete(requestedThreadId);
    
            return res.status(200).json({ message: "Thread deleted successfully" });
        } catch (error) {
            console.error('Error in delete:', error);
            const errorMessage = error.message || 'Internal Server Error';
            if (error.name === 'EntityNotFound') {
                return res.status(404).json({ error: "Thread not found" });
            }
            return res.status(500).json({ error: errorMessage });
        }
    }
        


}

export default new ThreadService();