import { Router } from "express";
import { CreateCategoryController } from "./controllers/CategoryController/CreateCategoryController";
import { GetAllCategoriesController } from "./controllers/CategoryController/GetAllCategoriesController";
import { DeleteCategoryController } from "./controllers/CategoryController/DeleteCategoryController";
import { UpdateCategoryController } from "./controllers/CategoryController/UpdateCategoryController";
import { CreateVideoController } from "./controllers/VideoController/CreateVideoController";
import { GetAllVideosController } from "./controllers/VideoController/GetAllVideosController";
import { DeleteVideoController } from "./controllers/VideoController/DeleteVideoController";
import { UpdateVideoController } from "./controllers/VideoController/UpdateVideoController";
import { CreateUserController } from "./controllers/UserController/CreateUserController";
import { GetAllUsersController } from "./controllers/UserController/GetAllUsersController";
import { DeleteUserController } from "./controllers/UserController/DeleteUserController";

const routes = Router()

routes.post("/categories", new CreateCategoryController().handle)
routes.get("/categories", new GetAllCategoriesController().handle)
routes.delete("/categories/:id", new DeleteCategoryController().handle)
routes.put("/categories/:id", new UpdateCategoryController().handle)

routes.post("/videos", new CreateVideoController().handle)
routes.get("/videos", new GetAllVideosController().handle)
routes.delete("/videos/:id", new DeleteVideoController().handle)
routes.put("/videos/:id", new UpdateVideoController().handle)

routes.post("/users", new CreateUserController().handle)
routes.get("/users", new GetAllUsersController().handle)
routes.delete("/users/:id", new DeleteUserController().handle)

export { routes }