import { Request, Response } from "express"
import { GetAllVideosService } from "../../services/VideoService/GetAllVideosService"

export class GetAllVideosController {
    async handle(request: Request, response: Response) {
        const service = new GetAllVideosService()

        const videos = await service.execute()
        return response.json(videos)
    }
}