import { TypeormCategoryRepository } from "./repositories/implementations/typeorm-categoriy.repository";
import { CreateCategoryController } from "./controller/CreateCategoryController";
import { CreateCategoryService } from "./service/CreateCategoryService";
import { GetAllCategoriesController } from "./controller/GetAllCategoriesController";
import { GetAllCategoriesService } from "./service/GetAllCategoriesService";
import { DeleteCategoryController } from "./controller/DeleteCategoryController";
import { UpdateCategoryController } from "./controller/UpdateCategoryController";

const repository = new TypeormCategoryRepository()

const createService = new CreateCategoryService(repository)
const createController = new CreateCategoryController(createService)

const getAllService = new GetAllCategoriesService(repository)
const getAllController  = new GetAllCategoriesController(getAllService)


const deleteController = new DeleteCategoryController()
const updateController = new UpdateCategoryController()


export { 
    createController,
    getAllController,
    deleteController,
    updateController
}