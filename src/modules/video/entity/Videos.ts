import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm"
import { v4 as uuid } from "uuid"
import { Category } from "../../category/entity/Category"

@Entity("videos")
export class Video {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    category_id: string

    @Column()
    duration: number

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id" })
    category: Category

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}