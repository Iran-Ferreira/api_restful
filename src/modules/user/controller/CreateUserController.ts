import { Request, Response } from 'express';
import { CreateUserService } from '../service/CreateUserService';

export class CreateUserController {
    constructor(private readonly service: CreateUserService) {}
    async handle(request: Request, response: Response): Promise<Response>{
        const { email, password } = request.body

        await this.service.execute(email, password)
        
        return response.json({ message: "Usuário criado com sucesso" })
    }
}