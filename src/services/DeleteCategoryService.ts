import { PostgresDataSource } from "../../db_config";
import { Category } from "../entities/Category";

export class DeleteCategoryService {
    async execute(id: string) {
        const repo = PostgresDataSource.getRepository(Category)
        
        if (!(await repo.findOne({ where: { id } }))) {
            return new Error("Category does not exists!")
        }

        await repo.delete(id)
    }
}