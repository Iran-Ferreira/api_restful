import { Entity, Column, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("users")
export class UserEntity {
    @PrimaryColumn()
    id: string

    @Column()
    email: string

    @Column()
    password: string

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }

}