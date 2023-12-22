import { AppDataSource } from "./data-source"
import * as express from "express"
import { User } from "./entity/User"
import * as cors from 'cors';
import { Request, Response } from "express"
import { threadRouter, userRoute } from "./routes"
require ('dotenv').config()


AppDataSource.initialize().then(async () => {
    const app = express();
    const port = process.env.PORT || 3000;
    
    app.use(cors());
    app.use(express.json());
    app.use("/api/v1", threadRouter);
    app.use("/api/v1", userRoute);
    

   app.listen(port, ()=>{
    console.log(`server listening on port http://localhost:${port}`);
   })


}).catch(error => console.log(error))
