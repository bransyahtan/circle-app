import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, UpdateDateColumn, CreateDateColumn } from "typeorm"
import { User } from "./User";
import { Thread } from "./thread";


@Entity({name: "reply"})
export class Reply  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column({nullable: true})
    image: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP()" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP()", onUpdate: "CURRENT_TIMESTAMP()" })
    updated_at: Date;

    @ManyToOne(() => User, user => user.replies)
    user: User;

    @ManyToOne(() => Thread, thread => thread.replies)
    thread: Thread;
} 