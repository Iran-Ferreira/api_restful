import { Request, Response } from "express";
import { GetAllUsersService } from "../service/GetAllUsersService";

export class GetAllUsersController {
    constructor(private readonly service: GetAllUsersService) {}
    async handle(request: Request, response: Response): Promise<Response>{
        const users = await this.service.execute()
        return response.json(users)
    }
}