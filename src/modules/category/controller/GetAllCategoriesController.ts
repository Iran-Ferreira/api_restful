import { Request, Response } from "express";
import { GetAllCategoriesService } from "../service/GetAllCategoriesService";

export class GetAllCategoriesController {
    constructor(private readonly service: GetAllCategoriesService) {}
    async handle(request: Request, response: Response): Promise<Response>{
        const categories = await this.service.execute()
        return response.json(categories)
    }
}
