import { Request, Response } from "express";
import { CreateCategoryService } from "../service/CreateCategoryService";

export class CreateCategoryController {
    async handle(request: Request, response: Response){
        const { name, description } = request.body

        const service = new CreateCategoryService()

        // Execute o serviço de categoria para criar a categoria
        const result = await service.execute({ name, description })

        // Se ocorrer um erro, verificar se é uma instância de Error
        if(result instanceof Error) {
            return response.status(400).json(result.message)
        }
        
        return response.json(result)
    }
}