import { PostgresDataSource } from "../../../db_config";
import { Category } from "../../entities/Category";
import { Video } from "../../entities/Videos";

type VideoRequest = {
    name: string
    description: string
    duration: number
    category_id: string
    id: string
}

export class CreateVideoService {
    async execute({ id, name, description, duration, category_id}: VideoRequest): Promise<Error | Video> {
        const repo = PostgresDataSource.getRepository(Video)
        const repocategory = PostgresDataSource.getRepository(Category)

        if(!(await repocategory.findOne({ where: { id } }))){
            return new Error("Category does not exists!")
        }

        const video = repo.create({ name, description, duration, category_id})
        
        await repo.save(video)
        return video 
    }
}