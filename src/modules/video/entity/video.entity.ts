import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm"
import { v4 as uuid } from "uuid"
import { CategoryEntity } from "../../category/entity/category.entity"

@Entity("videos")
export class VideoEntity {
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

    @ManyToOne(() => CategoryEntity)
    @JoinColumn({ name: "category_id" })
    category: CategoryEntity

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}