import { GetOneCategoryService } from "../service/GetOneCategoryService";
import { Request, Response } from 'express';

export class GetOneCategoryController {
    constructor(private readonly service: GetOneCategoryService) {}
    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params
        const category = await this.service.execute(String(id))
        return response.json(category)
    }
}