import { CategoryEntity } from "../entity/category.entity";
import { CategoryRepository } from "../repositories/category.repository";

export class GetAllCategoriesService {
    constructor(private readonly categoryRepository: CategoryRepository) {}
    async execute(): Promise<CategoryEntity>{
        const categories = await this.categoryRepository.find()
        return categories 
    }
}