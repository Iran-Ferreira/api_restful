import { Request, Response } from "express";
import { GetAllUsersService } from "../../services/UserService/GetAllUsersService";

export class GetAllUsersController {
    
    async handle(request: Request, response: Response){
        
        const service = new GetAllUsersService()

        // Execute o serviço de user para retornar todos os users
        const users = await service.execute()

        return response.json(users)
    }
}