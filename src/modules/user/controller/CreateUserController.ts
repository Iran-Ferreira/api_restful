import { Request, Response } from 'express';
import { CreateUserService } from '../service/CreateUserService';

export class CreateUserController {
    async handle(request: Request, response: Response){
        const { email, password } = request.body

        const service = new CreateUserService()

        // Execute o serviço de user para criar user
        const result =  await service.execute({ email, password})

        // Se ocorrer um erro, verificar se é uma instância de Error
        if(result instanceof Error){
            return response.status(400).json(result.message)
        }
        
        return response.json(result)
    }
}