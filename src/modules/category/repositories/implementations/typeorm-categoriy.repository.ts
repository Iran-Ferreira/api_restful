import { PostgresDataSource } from "../../../../../db_config";
import { CategoryRepository } from "../category.repository";
import { CategoryEntity } from "../../entity/category.entity";

export class TypeormCategoryRepository implements CategoryRepository {
    private repo
    constructor(){
        this.repo = PostgresDataSource.getRepository(CategoryEntity)
    }

    async create(name: string, description: string): Promise<CategoryEntity> {
        try {
            const category = await this.repo.create({ name, description })
            this.repo.save(category)
            return category
        } catch (error) {
            console.log(error)
            throw new Error("Erro em criar categoria")
        }
    }

    async find(): Promise<CategoryEntity> {
        try {
            const categorys = await this.repo.find()
            return categorys 
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao encontrar todas as categorias")
        }
    }

    async findById(id: string): Promise<CategoryEntity> {
        try {
            const category  = await this.repo.findOneBy({ id: id })
            return category
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao encontrar uma categoria")
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await this.repo.delete(id)
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao deletar categoria")
        }
    }

    async update(id: string, name: string, description: string): Promise<void> {
        try {
            const category = await this.repo.findOne({ where: { id }  })

            category.name = name ?? category.name 
            category.description = description ?? category.description

            await this.repo.save(category)
        return category
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao atualizar uma categoria")
        }
    }

}