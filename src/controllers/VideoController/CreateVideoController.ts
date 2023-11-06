import { Request, Response} from "express"
import { CreateVideoService } from "../../services/VideoService/CreateVideoService"

export class CreateVideoController {
    async handle(request: Request, response: Response) {
        const { id, name, description, category_id, duration} = request.body

        const service = new CreateVideoService()

        const result = await service.execute({
            name,
            description,
            category_id,
            duration,
            id
        })

        if(result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}