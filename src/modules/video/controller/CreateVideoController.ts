import { Request, Response} from "express"
import { CreateVideoService } from "../service/CreateVideoService"

export class CreateVideoController {
    async handle(request: Request, response: Response) {
        const { id, name, description, category, duration} = request.body

        const service = new CreateVideoService()

        // Execute o serviço de video para criar video
        const result = await service.execute({
            name,
            description,
            category_id:category,
            duration,
            id
        })

        // Se ocorrer um erro, verificar se é uma instância de Error
        if(result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}