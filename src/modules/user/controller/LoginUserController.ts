import { Request, Response } from 'express';
import { LoginUserService } from '../service/LoginUserService'; 

export class LoginUserController {
    constructor(private readonly service: LoginUserService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { email, password } = request.body  

        const token = await this.service.execute(String(id), email, password)

        return response.json(token)
    }
}