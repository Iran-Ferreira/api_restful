import { UserRepository } from "../repositories/user.repository";

export class UpdateUserService {
    constructor(private readonly userRepository: UserRepository) {}
    async execute (id: string, email: string, password: string): Promise<void>{
        await this.userRepository.update(id, email, password)
    }
}