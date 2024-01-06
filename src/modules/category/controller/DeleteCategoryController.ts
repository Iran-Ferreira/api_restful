import { Request, Response } from "express";
import { DeleteCategoryService } from "../service/DeleteCategoryService";

export class DeleteCategoryController {
    constructor(private readonly service: DeleteCategoryService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        await this.service.execute(String(id))

        return response.json({ message: "Categoria removida" })
    }
}