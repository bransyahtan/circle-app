require ('dotenv').config()
import "reflect-metadata"
import { DataSource } from "typeorm"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.hostDb,
    port: parseInt(process.env.portDb),
    username: process.env.usernameDb,
    password: process.env.passwordDb,
    database: process.env.databaseDb,
    synchronize: true,
    logging: false,
    entities: ["src/entity/*.ts"],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
})
