import { Repository } from 'typeorm/repository/Repository';
import { AppDataSource } from '../data-source';
import { Request, Response } from 'express';
import { User } from '../entity/User';
import * as bcrypt from 'bcrypt';
import { loginSchema, registerSchema } from '../utils/validator';
import * as jwt from "jsonwebtoken";

class UserService {
    private readonly userRepository: Repository<User> =
        AppDataSource.getRepository(User);

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;
            const saltRound = 10;

            const { error } = registerSchema.validate(data);
            if (error) {
                return res.status(400).json({
                    message: error.message,
                    status: 400,
                });
            }

            const existingUser = await this.userRepository.findOne({
                where: [{ username: data.username }, { email: data.email }],
            });

            if (existingUser) {
                return res.status(400).json({
                    message: 'Email or Username already exists',
                    status: 400,
                });
            }

            const newPassword = await bcrypt.hash(data.password, saltRound);
            const newUser = this.userRepository.create({
                username: data.username,
                fullName: data.fullName,
                email: data.email,
                password: newPassword,
            });

            await this.userRepository.save(newUser);

            return res.status(201).json({
                message: 'User created successfully',
                status: 201,
                data: { user: newUser },
            });
        } catch (error) {
            console.error('Error while creating user:', error);
            return res.status(500).json(error.message);
        }
    }

    async login(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;

            const { error } = loginSchema.validate(data);
            if (error) {
                return res.status(400).json({
                    message: error.message,
                    status: 400,
                });
            }

            const existUser = await this.userRepository.findOne({
                where: { email: data.email },
                // select: ['id', 'username', 'email', 'fullName', 'password', 'profilePicture', 'profileDescription'],
            });

            if (!existUser) {
                return res.status(404).json({
                    message: 'Email not found',
                    status: 404,
                });
            }

            const passwordCheck = await bcrypt.compare(
                data.password,
                existUser.password
            );

            if (!passwordCheck) {
                return res.status(401).json({
                    message: 'Incorrect password',
                    status: 401,
                });
            }

            const { password, ...userLogin } = existUser;
            const userForToken = {
                id: userLogin.id,
                // username: userLogin.username,
                // email: userLogin.email,
                // fullName: userLogin.fullName,
                // profilePicture: userLogin.profilePicture,

            };
            const token = jwt.sign({ user: userForToken }, process.env.JWT_SECRET, {
                expiresIn: '2h',
            });

            return res.status(200).json({ token });

        } catch (error) {
            console.error('Error while logging in:', error);
            return res.status(500).json(error.message);
        }
    }

    async check(req: Request, res: Response) : Promise<any> { 
        try {
          const loginSession = res.locals.loginSession
          
          const user = await this.userRepository.findOne({ where: { id: loginSession.user.id }})
    
          return res.status(200).json({
            message: "token is valid",
            user
          })
        } catch (error) {
          return res.status(500).json({ message: `Error while check token on service` })
        }
      }

    async logout(req: Request, res: Response) : Promise<any> { 
        delete req.headers["authorization"]
        return res.status(200).json ({
            message: "Succes Logout"
        }) 
    }

    async find(req: Request, res: Response): Promise<Response> {
		try {
			const users = await this.userRepository.find();
			return res.status(200).json({ code: 200, data: users });
		} catch (error) {
			res.status(500).json({ error: "error while getting users" });
		}
	} 

    async findOne(req: Request, res: Response): Promise<Response> {
        try {
            const requestedUserId = parseInt(req.params.id);
    
            const user = await this.userRepository.findOne({
                where: { id: requestedUserId },
                relations: ["thread"],
            });
    
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
    
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    
    async delete(req: Request, res: Response): Promise<Response> {
        try {
    
            const loggedInUserId = res.locals.loginSession.user.id;
            const requestedUserId = parseInt(req.params.id);
    
            // Check if the user is trying to delete their own account
            if (loggedInUserId !== requestedUserId) {
                return res.status(403).json({ error: "Unauthorized: You can only delete your own account" });
            }
    
            const user = await this.userRepository.findOne({
                where: { id: requestedUserId },
            });
    
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
    
            const deleteUser = await this.userRepository.remove(user);
            return res.status(200).json(deleteUser);
        } catch (error) {
            console.error('Error in delete:', error);
    
            // Check if the error has a message property
            const errorMessage = error.message || 'Internal Server Error';
    
            return res.status(500).json({ error: errorMessage });
        }
    }
    
    
    
    
}



export default new UserService();
