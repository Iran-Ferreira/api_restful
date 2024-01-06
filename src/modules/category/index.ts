import { TypeormCategoryRepository } from "./repositories/implementations/typeorm-categoriy.repository";
import { CreateCategoryController } from "./controller/CreateCategoryController";
import { CreateCategoryService } from "./service/CreateCategoryService";
import { GetAllCategoriesController } from "./controller/GetAllCategoriesController";
import { GetAllCategoriesService } from "./service/GetAllCategoriesService";
import { GetOneCategoryController } from "./controller/GetOneCategoryController";
import { GetOneCategoryService } from "./service/GetOneCategoryService";
import { DeleteCategoryController } from "./controller/DeleteCategoryController";
import { DeleteCategoryService } from "./service/DeleteCategoryService";
import { UpdateCategoryController } from "./controller/UpdateCategoryController";
import { UpdateCategoryService } from "./service/UpdateCategoryService";

const repository = new TypeormCategoryRepository()

const createService = new CreateCategoryService(repository)
const createController = new CreateCategoryController(createService)

const getAllService = new GetAllCategoriesService(repository)
const getAllController  = new GetAllCategoriesController(getAllService)

const getOneService = new GetOneCategoryService(repository)
const getOneController = new GetOneCategoryController(getOneService)

const deleteService = new DeleteCategoryService(repository)
const deleteController = new DeleteCategoryController(deleteService)

const updateService = new UpdateCategoryService(repository)
const updateController = new UpdateCategoryController(updateService)


export { 
    createController,
    getAllController,
    getOneController,
    deleteController,
    updateController
}