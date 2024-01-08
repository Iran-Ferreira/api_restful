import { VideoEntity } from "../entity/video.entity";
import { VideoRepository } from "../repository/video.repository";


export class CreateVideoService {
    constructor(private readonly videoRepository: VideoRepository) {}
    async execute(name: string, description: string, category_id: string, duration: number): Promise<VideoEntity> {
        const video = await this.videoRepository.create(name, description, category_id, duration)
        console.log(video)
        return video
    }
}