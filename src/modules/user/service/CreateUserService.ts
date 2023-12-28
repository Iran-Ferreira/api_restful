import { PostgresDataSource } from "../../../../db_config";
import { User } from "../entity/User";
import { hash } from 'bcryptjs';


type UserRequest = { 
    email: string
    password: string
}  

export class CreateUserService {
    async execute({ email, password }:UserRequest ): Promise<User | Error>{
        const repo = PostgresDataSource.getRepository(User)
        
        // Verificar se o email já está registrado.
        if(await repo.findOne({ where: { email } })){
            return new Error("Email already exists")
        }

        // Criar senha hash
        const passwordHash = await hash(password, 10)

        // criar novo usuário
        const user = repo.create({
            email, 
            password: passwordHash
        })

        // Salva o usuário e o retorna 
        repo.save(user)
        return user

    }
}