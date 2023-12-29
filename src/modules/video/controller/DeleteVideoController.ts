import { Request, Response } from "express";
import { DeleteVideoService } from "../service/DeleteVideoService";

export class DeleteVideoController {
    async handle(request: Request, response: Response){
        const { id } = request.params

        const service = new DeleteVideoService()

        // Execute o serviço de video para deletar video
        const result = await service.execute(id)

        // Se ocorrer um erro, verificar se é uma instância de Error
        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.status(204).end()
    }
}