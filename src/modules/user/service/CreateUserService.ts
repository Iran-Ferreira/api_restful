import { UserEntity } from "../entity/user.entity";
import { UserRepository } from "../repositories/user.repository";

export class CreateUserService {
    constructor(private readonly userRepository: UserRepository ) {}
    async execute(email: string, password: string): Promise<UserEntity>{        
        const user = await this.userRepository.create(email, password)
        return user
    }
}