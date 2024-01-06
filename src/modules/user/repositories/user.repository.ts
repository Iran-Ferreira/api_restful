import { UserEntity } from "../entity/user.entity";

export interface UserRepository {
    create(email: string, password: string): Promise<UserEntity>
    findById(id: string): Promise<UserEntity>
    find(): Promise<UserEntity[]>
    update(id: string, email: string, password: string): Promise<void>
    delete(id: string): Promise<void>
}