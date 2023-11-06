import { PostgresDataSource } from "../../../db_config"; 
import { Video } from "../../entities/Videos";

export class GetAllVideosService {
    async execute() {
        const repo = PostgresDataSource.getRepository(Video)

        const videos = await repo.find({
            relations: ["category"]
        })

        return videos
    }
}