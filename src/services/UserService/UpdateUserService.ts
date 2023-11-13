import { PostgresDataSource } from "../../../db_config";
import { User } from "../../entities/User";

type UpdateUserRequest = { 
    id: string
    email: string
    password: string
}  

export class UpdateUserService {
    async execute ({ id, email, password }: UpdateUserRequest){
        const repo = PostgresDataSource.getRepository(User)

        const user = await repo.findOne({ where: { id }})

        if(!user) {
            throw new Error("User does not exists!")
        }

        user.email = email ?? user.email
        user.password = password ?? user.password
    
        await repo.save(user)
        return user
    }
}