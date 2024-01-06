import { Request, Response } from "express";
import { CreateCategoryService } from "../service/CreateCategoryService";

export class CreateCategoryController {
    constructor(private readonly service: CreateCategoryService){}
    async handle(request: Request, response: Response): Promise<Response>{
        const { name, description } = request.body

        await this.service.execute(name, description)

        return response.json({ message: "Categoria criada com sucesso" })
    }
}