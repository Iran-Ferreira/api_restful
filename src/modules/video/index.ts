import { CreateVideoController } from "./controller/CreateVideoController";
import { GetAllVideosController } from "./controller/GetAllVideosController";
import { DeleteVideoController } from "./controller/DeleteVideoController";
import { UpdateVideoController } from "./controller/UpdateVideoController";

const createController = new CreateVideoController()
const getAllController = new GetAllVideosController()
const deleteController = new DeleteVideoController()
const updateController = new UpdateVideoController()

export { 
    createController,
    getAllController,
    deleteController,
    updateController
}