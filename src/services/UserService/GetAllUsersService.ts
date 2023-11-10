import { PostgresDataSource } from "../../../db_config";
import { User } from "../../entities/User";

export class GetAllUsersService {
    
    async execute(){
        const repo = PostgresDataSource.getRepository(User)

        const users = await repo.find()

        return users 
    }
}