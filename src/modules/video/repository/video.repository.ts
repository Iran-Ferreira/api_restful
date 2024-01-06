import { VideoEntity } from "../entity/video.entity";

export interface VideoRepository {
    create(name: string, description: string, category_id: string, duration: number): Promise<VideoEntity>
    findById(id: string): Promise<VideoEntity>
    find(): Promise<VideoEntity>
    update(id: string, name: string, description: string, duration: number): Promise<void>
    delete(id: string): Promise<void>
}