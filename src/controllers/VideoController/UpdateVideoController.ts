import { Request, Response } from "express";
import { UpdateVideoService } from '../../services/VideoService/UpdateVideoService';

export class UpdateVideoController {
    async handle(request: Request, response: Response){
        const { id } = request.params
        const { name, description, duration } = request.body

        const service = new UpdateVideoService()

        // Execute o serviço de video para atualizar video
        const result = await service.execute({ id, name, description, duration })

        // Se ocorrer um erro, verificar se é uma instância de Error
        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}