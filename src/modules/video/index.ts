import { TypeormVideoRepository } from "./repository/implementations/typeorm-video.repository";
import { CreateVideoController } from "./controller/CreateVideoController";
import { CreateVideoService } from "./service/CreateVideoService";
import { GetAllVideosController } from "./controller/GetAllVideosController";
import { GetAllVideosService } from "./service/GetAllVideosService";
import { GetOneVideoController } from "./controller/GetOneVideoController";
import { GetOneVideoService } from "./service/GetOneVideoService";
import { DeleteVideoController } from "./controller/DeleteVideoController";
import { DeleteVideoService } from "./service/DeleteVideoService";
import { UpdateVideoController } from "./controller/UpdateVideoController";
import { UpdateVideoService } from "./service/UpdateVideoService";

const repository = new TypeormVideoRepository()

const createService = new CreateVideoService(repository)
const createController = new CreateVideoController(createService)

const getAllService = new GetAllVideosService(repository)
const getAllController = new GetAllVideosController(getAllService)

const getOneService = new GetOneVideoService(repository)
const getOneController = new GetOneVideoController(getOneService)

const deleteService = new DeleteVideoService(repository)
const deleteController = new DeleteVideoController(deleteService)

const updateService = new UpdateVideoService(repository)
const updateController = new UpdateVideoController(updateService)

export { 
    createController,
    getAllController,
    getOneController,
    deleteController,
    updateController
}