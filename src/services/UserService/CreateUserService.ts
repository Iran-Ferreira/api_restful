import { PostgresDataSource } from "../../../db_config";
import { User } from "../../entities/User";
import bcrypt, { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';


type UserRequest = { 
    email: string
    password: string
}   

export class CreateUserService {
    async execute({ email, password }:UserRequest ): Promise<User | Error>{
        const repo = PostgresDataSource.getRepository(User)
    
        if(await repo.findOne({ where: { email } })){
            return new Error("Email already exists")
        }

        const passwordHash = await hash(password, 10)

        const user = repo.create({
            email, 
            password: passwordHash
        })

        const validate = await bcrypt.compare(password, user.password)
        if (!validate){
            return new Error("Wrong password")
        }

        repo.save(user)
        return user

    }
}