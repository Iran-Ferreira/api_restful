import { UserEntity } from "../entity/user.entity";
import { UserRepository } from "../repositories/user.repository";

export class GetOneUserService {
    constructor(private readonly userRepository: UserRepository) {}
    async execute(id: string): Promise<UserEntity>{
        const user = await this.userRepository.findById(id)
        return user 
    }
}