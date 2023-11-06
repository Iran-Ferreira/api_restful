import { Router } from "express";
import { CreateCategoryController } from "./controllers/CategoryController/CreateCategoryController";
import { GetAllCategoriesController } from "./controllers/CategoryController/GetAllCategoriesController";
import { DeleteCategoryController } from "./controllers/CategoryController/DeleteCategoryController";
import { UpdateCategoryController } from "./controllers/CategoryController/UpdateCategoryController";
import { CreateVideoController } from "./controllers/VideoController/CreateVideoController";
import { GetAllVideosController } from "./controllers/VideoController/GetAllVideosController";

const routes = Router()

routes.post("/categories", new CreateCategoryController().handle)
routes.get("/categories", new GetAllCategoriesController().handle)
routes.delete("/categories/:id", new DeleteCategoryController().handle)
routes.put("/categories/:id", new UpdateCategoryController().handle)

routes.post("/videos", new CreateVideoController().handle)
routes.get("/videos", new GetAllVideosController().handle)

export { routes }