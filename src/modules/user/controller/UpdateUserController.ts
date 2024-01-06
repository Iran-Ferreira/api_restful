import { Request, Response } from "express";
import { UpdateUserService } from "../service/UpdateUserService";

export class UpdateUserController {
    constructor(private readonly service: UpdateUserService) {}
    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params
        const { email, password } = request.body

        await this.service.execute(String(id), email, password)
    
        return response.json({ message: "Usuário atualizado" })
    }
}