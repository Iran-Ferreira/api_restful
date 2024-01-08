import { VideoRepository } from "../repository/video.repository";


export class UpdateVideoService {
    constructor(private readonly videoRepository: VideoRepository) {}
    async execute(id: string, name: string, description: string, duration: number ): Promise<void>{
        await this.videoRepository.update(id, name, description, duration)
    }
}