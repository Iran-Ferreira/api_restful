import { PostgresDataSource } from "../../../../db_config";
import { User } from "../entity/User";

export class GetAllUsersService {
    
    async execute(){
        const repo = PostgresDataSource.getRepository(User)

        // Retorna todos os user 
        const users = await repo.find()

        return users 
    }
}