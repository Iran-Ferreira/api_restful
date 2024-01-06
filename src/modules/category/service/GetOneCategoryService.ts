import { CategoryEntity } from "../entity/category.entity";
import { CategoryRepository } from "../repositories/category.repository";

export class GetOneCategoryService {
    constructor(private readonly categoryRepository: CategoryRepository) {}
    async execute(id: string): Promise<CategoryEntity>{
        const category = await this.categoryRepository.findById(id)
        return category
    }
}