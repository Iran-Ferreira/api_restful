import { CategoryEntity } from "../entity/category.entity";
import { CategoryRepository } from "../repositories/category.repository";

export class CreateCategoryService {
    constructor(private readonly categoryRepository: CategoryRepository) {}
    async execute(name: string, description: string): Promise<CategoryEntity>{
        const category = await this.categoryRepository.create(name, description)
        return category
    }
}