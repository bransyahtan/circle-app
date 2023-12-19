import { AppDataSource } from "./data-source"
import * as express from "express"
import { User } from "./entity/User"
import { Request, Response } from "express"

AppDataSource.initialize().then(async () => {
    const app = express();
    const port = process.env.PORT || 3000;
    const router = express.Router();

    app.use(express.json());
    app.use("/api/v1", router);
    
    app.get("/", (req, res) =>{
        res.send("hai");
    });

   app.listen(port, ()=>{
    
   })


}).catch(error => console.log(error))
