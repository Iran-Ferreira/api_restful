import { PostgresDataSource } from "../../../db_config";  
import { Video } from "../../entities/Videos";

export class DeleteVideoService {
    async execute(id: string) {
        const repo = PostgresDataSource.getRepository(Video)
        
        if (!(await repo.findOne({ where: { id } }))) {
            return new Error("Video does not exists!")
        }

        await repo.delete(id)
        return "Video delete successfully"
    }
}