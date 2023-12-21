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

    @Column()
    password: string

    @Column({default: 'https://via.placeholder.com/200', nullable: true,})
    profilePicture: string

    @Column({default:'halo saya pengguna baru', nullable: true})
    profileDescription: string

    @OneToMany(()=> Thread, (thread) => thread.user)
    thread:Thread[]
}
