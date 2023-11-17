import { Request, Response } from "express";
import { UpdateUserService } from "../../services/UserService/UpdateUserService";

export class UpdateUserController {
    async handle(request: Request, response: Response){
        const { id } = request.params
        const { email, password } = request.body

        const service = new UpdateUserService()

        // Execute o serviço de user para atualizar user
        const result = await service.execute({ id, email, password })

        // Se ocorrer um erro, verificar se é uma instância de Error
        if (result instanceof Error){
            throw response.status(400).json(result.message)
        }

        return response.json(result)
    }
}