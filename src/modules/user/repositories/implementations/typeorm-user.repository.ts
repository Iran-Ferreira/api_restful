import { PostgresDataSource } from "../../../../../db_config";
import { UserEntity } from "../../entity/user.entity";
import { UserRepository } from "../user.repository";
import { hash } from 'bcryptjs';
import { JWTService } from "../../service/JWTService";
import bcrypt from 'bcryptjs';

export class TypeormUserRepository implements UserRepository {
    private repo
    constructor(){
        this.repo = PostgresDataSource.getRepository(UserEntity)
    }

    async create(email: string, password: string): Promise<UserEntity> {
        try {
            // Criar senha hash
            const passwordHash = await hash(password, 10)

            password = passwordHash

            // criar novo usuário
            const user = await this.repo.create({ email, password})

            // Salva o usuário e o retorna 
            this.repo.save(user)
            return user
        } catch (error) {
            console.log(error)
            throw new Error("Erro em criar usuário")
        }
    }

    async find(): Promise<UserEntity[]> {
        try {
            // Retorna todos os user 
            const users = await this.repo.find()
            return users 

        } catch (error) {
            console.log(error)
            throw new Error("Erro ao encontrar todos os usuários")
        }
    }

    async findById(id: string): Promise<UserEntity> {
        try {
            const user = await this.repo.findOneBy({id: id})
            return user
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao encontrar um usuário")
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await this.repo.delete(id)
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao deletar um usuário")
        }
    }

    async update(id: string, email: string, password: string): Promise<void> {
        try {
            const user = await this.repo.findOne({ where: { id }})
    
            // Se uma nova senha for fornecida, criptografe-a
            if (password) {
                const passwordHash = await hash(password, 10)
                user.password = passwordHash;
            }
    
            user.email = email ?? user.email
        
            await this.repo.save(user)
            return user
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao atualizar um usuário")
        }
    }

    async login(id: string, email: string, password: string): Promise<string> {
        try {
            const user = await this.repo.findOne({ where: { email }})

            const passwordMatch = await bcrypt.compare(password, user.password)

            const token = JWTService.sign({ id: id })
            return token
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao fazer login")
        }
    }

}