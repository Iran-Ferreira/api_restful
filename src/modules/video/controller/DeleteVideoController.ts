import { Request, Response } from "express";
import { DeleteVideoService } from "../service/DeleteVideoService";

export class DeleteVideoController {
    constructor(private readonly service: DeleteVideoService) {}
    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params

        // Execute o serviço de video para deletar video
        await this.service.execute(String(id))

        return response.json({ message: "Video deletado com sucesso" })
    }
}