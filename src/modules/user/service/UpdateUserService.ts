import { PostgresDataSource } from "../../../../db_config";
import { User } from "../entity/User";
import { hash } from "bcryptjs";

type UpdateUserRequest = { 
    id: string
    email: string
    password?: string // tornando a senha opcional
}  

export class UpdateUserService {
    async execute ({ id, email, password }: UpdateUserRequest){
        const repo = PostgresDataSource.getRepository(User)

        const user = await repo.findOne({ where: { id }})

        // Se não encontrar o id ele quer dizer que não existe
        if(!user) {
            throw new Error("User does not exists!")
        }

        // Se uma nova senha for fornecida, criptografe-a
        if (password) {
            const passwordHash = await hash(password, 10)
            user.password = passwordHash;
        }

        user.email = email ?? user.email
    
        await repo.save(user)
        return user
    }
}