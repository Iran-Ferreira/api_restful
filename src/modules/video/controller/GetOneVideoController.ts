import { Request, Response } from "express";
import { GetOneVideoService } from "../service/GetOneVideoService";

export class GetOneVideoController {
    constructor(private readonly service: GetOneVideoService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        const video = await this.service.execute(String(id))

        return response.json(video)
    }
}