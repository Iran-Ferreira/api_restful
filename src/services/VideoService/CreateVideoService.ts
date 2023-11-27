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
        try{
            // Se eu colocar uma categoria que não existe no filme vai retornar um erro. 
            if(!(await repocategory.findOne({ where: { id } }))){
                return new Error("Category does not exists!")
            }

            const video = repo.create({ name, description, duration, category_id})
            
            await repo.save(video)
            return video
            
        }catch(error){
            if(error.code === "23502"){
                return new Error("null value in column name of relation videos violates not-null constraint")
            }
        }
    
    }
}