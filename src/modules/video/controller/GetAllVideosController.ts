import { Request, Response } from "express"
import { GetAllVideosService } from "../service/GetAllVideosService"


export class GetAllVideosController {
    constructor(private readonly service: GetAllVideosService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        // Execute o serviço de video para retornar video
        const videos = await this.service.execute()
        return response.json(videos)
    }
}