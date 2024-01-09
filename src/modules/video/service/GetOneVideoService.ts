import { VideoRepository } from '../repository/video.repository';
import { VideoEntity } from '../entity/video.entity';


export class GetOneVideoService {
    constructor(private readonly videoRepository: VideoRepository) {}
    async execute(id: string): Promise<VideoEntity> {
        const video = await this.videoRepository.findById(id) 
        return video
    }
}