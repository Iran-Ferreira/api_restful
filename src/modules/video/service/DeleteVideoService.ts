import { PostgresDataSource } from "../../../../db_config";
import { VideoEntity } from "../entity/video.entity";
import { VideoRepository } from "../repository/video.repository";

export class DeleteVideoService {
    constructor(private readonly videoRepository: VideoRepository) {}
    async execute(id: string): Promise<void> {
        await this.videoRepository.delete(id)
    }
}