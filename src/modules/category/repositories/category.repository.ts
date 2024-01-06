import { CategoryEntity } from "../entity/category.entity";

export interface CategoryRepository {
    create(name: string, description: string): Promise<CategoryEntity>
    findById(id: string): Promise<CategoryEntity>
    find(): Promise<CategoryEntity>
    update(id: string, name: string, description: string): Promise<void>
    delete(id: string): Promise<void>
}