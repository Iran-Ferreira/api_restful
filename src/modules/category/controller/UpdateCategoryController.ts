import { Request, Response } from "express";
import { UpdateCategoryService } from "../service/UpdateCategoryService";

export class UpdateCategoryController {
    async handle(request: Request, response: Response) {
        const { id } = request.params
        const { name, description } = request.body

        const service = new UpdateCategoryService()

        // Execute o serviço de categoria para atualizar a categoria
        const result = await service.execute({ id, name, description })

        // Se ocorrer um erro, verificar se é uma instância de Error
        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}