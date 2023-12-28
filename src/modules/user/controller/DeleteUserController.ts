import { Request, Response } from "express";
import { DeleteUserService } from "../service/DeleteUserService";

export class DeleteUserController {
    async handle(request: Request, response: Response){
        const { id } = request.params

        const service = new DeleteUserService()

        // Execute o serviço de user para deletar user
        const result = await service.execute(id)

        // Se ocorrer um erro, verificar se é uma instância de Error
        if(result instanceof Error){
            return response.status(400).json(result.message)
        }
        
        return response.status(204).end()
    }
}