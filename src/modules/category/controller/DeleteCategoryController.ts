import { Request, Response } from "express";
import { DeleteCategoryService } from "../service/DeleteCategoryService";

export class DeleteCategoryController {
    async handle(request: Request, response: Response) {
        const { id } = request.params

        const service = new DeleteCategoryService()

        // Execute o serviço de categoria para deletar categoria
        const result = await service.execute(id)

        // Se ocorrer um erro, verificar se é uma instância de Error
        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(204).end()
    }
}