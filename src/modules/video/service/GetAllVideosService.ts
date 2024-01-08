import { VideoEntity } from "../entity/video.entity";
import { VideoRepository } from "../repository/video.repository";

export class GetAllVideosService {
    constructor(private readonly videoRepository: VideoRepository) {}
    async execute(): Promise<VideoEntity> {
        // Retorna todos os videos
        const videos = await this.videoRepository.find()
        return videos
    }
}