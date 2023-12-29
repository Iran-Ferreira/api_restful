import { Request, Response } from "express";
import { GetAllCategoriesService } from "../service/GetAllCategoriesService";

export class GetAllCategoriesController {
    async handle(request: Request, response: Response){
        const service = new GetAllCategoriesService()

        // Execute o serviço de categoria para retorna todas as categorias
        const categories = await service.execute()
        
        return response.json(categories)
    }
}
