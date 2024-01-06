import { CategoryRepository } from "../repositories/category.repository";

export class DeleteCategoryService {
    constructor(private readonly categoryRepository: CategoryRepository) {}
    async execute(id: string): Promise<void> {
        await this.categoryRepository.delete(id)
        }
}
