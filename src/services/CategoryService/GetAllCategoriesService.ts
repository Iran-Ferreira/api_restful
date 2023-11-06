import { PostgresDataSource } from "../../../db_config";
import { Category } from "../../entities/Category";

export class GetAllCategoriesService {
    
    async execute(){
        const repo = PostgresDataSource.getRepository(Category)

        const categories = await repo.find()

        return categories 
    }
}