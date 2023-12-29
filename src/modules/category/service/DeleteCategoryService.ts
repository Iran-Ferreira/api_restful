import { PostgresDataSource } from "../../../../db_config";
import { Category } from "../entity/Category";

export class DeleteCategoryService {
    async execute(id: string) {
        const repo = PostgresDataSource.getRepository(Category)
        try{
            const category = await repo.findOne({ where: { id }})

            if (!category){
                return new Error("Category does not exist")
            }
            await repo.delete(id)
            return "Category delete successfully"
        }
        // Se deletar uma categoria que está vinculada em um filme retorna um erro.
        catch (error) {
            if(error.code === "23503"){
                return new Error("Delete on table categories violates foreign key constraint on table videos")
            }

            throw error
        }
    }
}