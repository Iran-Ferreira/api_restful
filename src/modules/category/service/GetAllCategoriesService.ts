import { PostgresDataSource } from "../../../../db_config";
import { Category } from "../entity/Category";

export class GetAllCategoriesService {
    
    async execute(){
        const repo = PostgresDataSource.getRepository(Category)

        // Retorna as categorias
        const categories = await repo.find()

        return categories 
    }
}