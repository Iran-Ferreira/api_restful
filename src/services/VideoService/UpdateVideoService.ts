import { PostgresDataSource } from "../../../db_config";
import { Video } from "../../entities/Videos";

type VideoUpdateRquest = {
    id: string 
    name: string
    description: string
    duration: number
}

export class UpdateVideoService {
    async execute({ id, name, description, duration }: VideoUpdateRquest){
        const repo = PostgresDataSource.getRepository(Video)

        const video = await repo.findOne({ where: { id }})

        // Se não encontrar o id do video quer dizer que ele não existe
        if(!video){
            return new Error("Video does not exists!")
        }

        video.name = name ?? video.name
        video.description = description ?? video.description
        video.duration = duration ?? video.duration

        await repo.save(video)
        return video
    }
}