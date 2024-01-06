import { UserRepository } from "../repositories/user.repository";

export class DeleteUserService {
    constructor(private readonly userRepository: UserRepository) {}
    async execute(id: string): Promise<void>{
        await this.userRepository.delete(id)
    }
}