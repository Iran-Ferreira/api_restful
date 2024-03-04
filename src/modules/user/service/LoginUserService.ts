import { UserRepository } from "../repositories/user.repository";

export class LoginUserService {
    constructor(private readonly userRepository: UserRepository) {}
    async execute(id: string, email: string, password: string): Promise<string>{
        const token = await this.userRepository.login(id, email, password)
        return token
    }
}
