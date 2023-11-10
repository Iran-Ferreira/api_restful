import { PostgresDataSource } from "../../../db_config";
import { User } from "../../entities/User";

export class DeleteUserService {
    async execute(id: string){
        const repo = PostgresDataSource.getRepository(User)

        if (!(await repo.findOne({ where: { id }}))){
            return new Error("User does not exits")
        }

        await repo.delete(id)
    }
}