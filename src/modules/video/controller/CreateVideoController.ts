import { Request, Response} from "express"
import { CreateVideoService } from "../service/CreateVideoService"

export class CreateVideoController {
    constructor(private readonly service: CreateVideoService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description, category_id, duration} = request.body

        await this.service.execute(name, description, category_id, duration)

        return response.json({ message: "Video criado com sucesso" })
    }
}