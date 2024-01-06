import { GetOneUserService } from "../service/GetOneUserService";
import { Request, Response } from "express";

export class GetOneUserController {
    constructor(private readonly service: GetOneUserService) {}
    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params
        const user = await this.service.execute(String(id))
        return response.json(user)
    }
}