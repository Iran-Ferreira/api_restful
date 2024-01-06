import { Request, Response } from "express";
import { DeleteUserService } from "../service/DeleteUserService";

export class DeleteUserController {
    constructor(private readonly service: DeleteUserService) {}
    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params
        await this.service.execute(String(id))
        
        return response.json({ message: "Usuário removido" })
    }
}