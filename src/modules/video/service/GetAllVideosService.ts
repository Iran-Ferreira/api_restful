import { PostgresDataSource } from "../../../../db_config";
import { Video } from "../entity/Videos";

export class GetAllVideosService {
    async execute() {
        const repo = PostgresDataSource.getRepository(Video)

        // Retorna todos os videos
        const videos = await repo.find({
            relations: ["category"]
        })

        return videos
    }
}