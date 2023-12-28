import { PostgresDataSource } from "../../../../db_config";
import { User } from "../entity/User";

export class DeleteUserService {
    async execute(id: string){
        const repo = PostgresDataSource.getRepository(User)

        // Verificar se o user não existe. Se existir, vai ser apagado.
        if (!(await repo.findOne({ where: { id }}))){
            return new Error("User does not exits")
        }

        await repo.delete(id)
    }
}