import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Thread } from "./thread";

@Entity({name: "users"})
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    fullName: string

    @Column()
    email: string

    @Column({select: false})
    password: string

    @Column({nullable: true})
    profilePicture: string

    @Column({nullable: true})
    profileDescription: string

    @OneToMany(()=> Thread, (thread) => thread.user)
    thread:Thread[]
}
