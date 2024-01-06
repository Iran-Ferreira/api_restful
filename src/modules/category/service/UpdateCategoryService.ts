import { CategoryRepository } from "../repositories/category.repository";

export class UpdateCategoryService {
    constructor(private readonly categoryRepository: CategoryRepository) {}
    async execute(id: string, name: string, description: string): Promise<void>{
        
        await this.categoryRepository.update(id, name, description)
    }
}