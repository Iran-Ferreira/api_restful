import { TypeormVideoRepository } from "./repository/implementations/typeorm-video.repository";
import { CreateVideoController } from "./controller/CreateVideoController";
import { CreateVideoService } from "./service/CreateVideoService";
import { GetAllVideosController } from "./controller/GetAllVideosController";
import { GetAllVideosService } from "./service/GetAllVideosService";
import { DeleteVideoController } from "./controller/DeleteVideoController";
import { UpdateVideoController } from "./controller/UpdateVideoController";

const repository = new TypeormVideoRepository()

const createService = new CreateVideoService(repository)
const createController = new CreateVideoController(createService)

const getAllService = new GetAllVideosService(repository)
const getAllController = new GetAllVideosController(getAllService)


const deleteController = new DeleteVideoController()
const updateController = new UpdateVideoController()

export { 
    createController,
    getAllController,
    deleteController,
    updateController
}