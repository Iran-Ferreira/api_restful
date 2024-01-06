import { TypeormUserRepository } from "./repositories/implementations/typeorm-user.repository";
import { CreateUserController } from "./controller/CreateUserController";
import { CreateUserService } from "./service/CreateUserService";
import { GetAllUsersController } from "./controller/GetAllUsersController";
import { GetAllUsersService } from "./service/GetAllUsersService";
import { DeleteUserController } from "./controller/DeleteUserController";
import { DeleteUserService } from "./service/DeleteUserService";
import { UpdateUserController } from "./controller/UpdateUserController";
import { UpdateUserService } from "./service/UpdateUserService";
import { LoginUserController } from "./controller/LoginUserController";

const repository = new TypeormUserRepository()

const createService = new CreateUserService(repository)
const createController = new CreateUserController(createService)

const getAllService = new GetAllUsersService(repository)
const getAllController = new GetAllUsersController(getAllService)

const deleteService = new DeleteUserService(repository)
const deleteController = new DeleteUserController(deleteService)

const updateService = new UpdateUserService(repository)
const updateController = new UpdateUserController(updateService)


const loginController = new LoginUserController()


export { 
    createController,
    getAllController,
    deleteController,
    updateController,
    loginController
}