import { CreateUserController } from "./controller/CreateUserController";
import { GetAllUsersController } from "./controller/GetAllUsersController";
import { DeleteUserController } from "./controller/DeleteUserController";
import { UpdateUserController } from "./controller/UpdateUserController";
import { LoginUserController } from "./controller/LoginUserController";

const createController = new CreateUserController()
const getAllController = new GetAllUsersController()
const deleteController = new DeleteUserController()
const updateController = new UpdateUserController()
const loginController = new LoginUserController()


export { 
    createController,
    getAllController,
    deleteController,
    updateController,
    loginController
}