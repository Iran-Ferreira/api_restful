import { TypeormUserRepository } from "./repositories/implementations/typeorm-user.repository";
import { CreateUserController } from "./controller/CreateUserController";
import { CreateUserService } from "./service/CreateUserService";
import { GetAllUsersController } from "./controller/GetAllUsersController";
import { DeleteUserController } from "./controller/DeleteUserController";
import { UpdateUserController } from "./controller/UpdateUserController";
import { LoginUserController } from "./controller/LoginUserController";

const repository = new TypeormUserRepository()

const createService = new CreateUserService(repository)
const createController = new CreateUserController(createService)

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