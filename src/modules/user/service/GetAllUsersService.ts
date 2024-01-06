import { UserEntity } from "../entity/user.entity";
import { UserRepository } from "../repositories/user.repository";

export class GetAllUsersService {
    constructor(private readonly userRepository: UserRepository) {}
    async execute(): Promise<UserEntity[]>{
        const users = await this.userRepository.find()
        return users
    }
}