import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Thread } from "./entity/thread"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "circleDb",
    synchronize: true,
    logging: false,
    entities: [User, Thread],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
})
