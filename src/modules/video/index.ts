import { TypeormVideoRepository } from "./repository/implementations/typeorm-video.repository";
import { CreateVideoController } from "./controller/CreateVideoController";
import { CreateVideoService } from "./service/CreateVideoService";
import { GetAllVideosController } from "./controller/GetAllVideosController";
import { DeleteVideoController } from "./controller/DeleteVideoController";
import { UpdateVideoController } from "./controller/UpdateVideoController";

const repository = new TypeormVideoRepository()

const createService = new CreateVideoService(repository)
const createController = new CreateVideoController(createService)


const getAllController = new GetAllVideosController()
const deleteController = new DeleteVideoController()
const updateController = new UpdateVideoController()

export { 
    createController,
    getAllController,
    deleteController,
    updateController
}