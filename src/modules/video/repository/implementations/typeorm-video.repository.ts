import { PostgresDataSource } from "../../../../../db_config";
import { VideoEntity } from "../../entity/video.entity";
import { VideoRepository } from "../video.repository";

export class TypeormVideoRepository implements VideoRepository {
    private repo 
    constructor(){
        this.repo = PostgresDataSource.getRepository(VideoEntity)
    }

    async create(name: string, description: string, category_id: string, duration: number): Promise<VideoEntity> {
        try {
            const video = await this.repo.create({ name, description, category_id, duration })
            this.repo.save(video)
            console.log("create video: ", video)
            return video
        } catch (error) {
            console.log(error);
            if(error.code === "23502"){
                throw new Error("null value in column name of relation videos violates not-null constraint")
            }
        }
    }

    async find(): Promise<VideoEntity> {
        try {
            const videos = await this.repo.find({ relations: ["category"] })
            return videos 
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao encontrar todos os videos")
        }
    }

    async findById(id: string): Promise<VideoEntity> {
        try {
            const video = await this.repo.findOneBy({ id: id })
            return video
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao encontrar um video")
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await this.repo.delete(id)
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao deletar video")
        }
    }

    async update(id: string, name: string, description: string, duration: number): Promise<void> {
        try {
            const video = await this.repo.findOne({ where: { id } })
        
            video.name = name ?? video.name
            video.description = description ?? video.description
            video.duration = duration ?? video.duration

            await this.repo.save(video)
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao atualizar video")
        }
    }

}