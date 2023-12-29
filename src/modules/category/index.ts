import { CreateCategoryController } from "./controller/CreateCategoryController";
import { GetAllCategoriesController } from "./controller/GetAllCategoriesController";
import { DeleteCategoryController } from "./controller/DeleteCategoryController";
import { UpdateCategoryController } from "./controller/UpdateCategoryController";

const createController = new CreateCategoryController()
const getAllController  = new GetAllCategoriesController()
const deleteController = new DeleteCategoryController()
const updateController = new UpdateCategoryController()


export { 
    createController,
    getAllController,
    deleteController,
    updateController
}