import { Request, Response } from "express";
import { UpdateCategoryService } from "../service/UpdateCategoryService";

export class UpdateCategoryController {
    constructor(private readonly service: UpdateCategoryService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { name, description } = request.body

        await this.service.execute(String(id), name, description)

        return response.json({ message: "Categoria atualizada" })
    }
}