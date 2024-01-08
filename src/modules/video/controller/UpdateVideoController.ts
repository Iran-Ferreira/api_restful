import { Request, Response } from "express";
import { UpdateVideoService } from '../service/UpdateVideoService';

export class UpdateVideoController {
    constructor(private readonly service: UpdateVideoService) {}
    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params
        const { name, description, duration } = request.body

        // Execute o serviço de video para atualizar video
        await this.service.execute(String(id), name, description, duration )

        return response.json({ message: "Video atualizado com sucesso" })
    }
}