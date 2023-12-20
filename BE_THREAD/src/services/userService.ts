import { Repository } from "typeorm/repository/Repository";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { User } from "../entity/User";
import * as bcrypt from "bcrypt"


class UserService {
    private readonly userRepository: Repository<User> = 
    AppDataSource.getRepository(User);

    async create(req: Request, res: Response): Promise<Response>{
        try {
            
            const { username, fullName, email, password, profilePicture, profileDescription } = req.body;
            const saltRound = 10

            const newPassword = await bcrypt.hash (password, saltRound);
            const newUser = this.userRepository.create({
                username,
                fullName, 
                email, 
                password: newPassword,
                profilePicture, 
                profileDescription
                
            });
    
            await this.userRepository.save(newUser);
    
            return res.status(201).json({
                message: "User created successfully",
                status: 201,
                data: { user: newUser }
            });
        } catch (error) {
            console.error("Error while creating user:", error);
            return res.status(500).json({ error: "Error while creating user" });
        }
    }

    async login(req: Request, res: Response): Promise<Response>{
        try {
            
            const { email, password } = req.body;
            
            const existUser = await this.userRepository.findOne({
                where : { email: email}
            });

            if (!existUser) {
                return res.status(404).json({
                    message: "user not found",
                    status: 404,
                })
            }
            const passwordCheck = await bcrypt.compare(password, existUser.password)
            // console.log(passwordCheck)

            if (!passwordCheck) {
                return res.status(404).json({
                    message: "password wrong",
                    status: 404,
                })
            }
            return res.status(200).json({
                message: "yey masok",
                status: 200
            })
            
        } catch (error) {
            // console.error("Error while creating user:", error);
            return res.status(500).json(error.message);
        }
    }

}

export default new UserService();
