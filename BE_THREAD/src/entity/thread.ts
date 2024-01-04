import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { User } from "./User";
import { Reply } from "./replies";

@Entity({name: "threads"})
export class Thread  {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @Column({nullable:true})
    image: string

    @Column({ type: "date", default :() => "CURRENT_TIMESTAMP"})
    posted_at: Date

    @ManyToOne(() => User, (user) => user.thread,{
        onDelete:"CASCADE",
        onUpdate:"CASCADE",
    })
    user: User;

    @OneToMany(() => Reply, reply => reply.thread)
    replies: Reply[]

} 
