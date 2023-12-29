import { Router } from "express"
import UserRoutes from "./user.routes"
import CategoryRoutes from "./category.routes"

const routes = Router()

routes.use(UserRoutes)
routes.use(CategoryRoutes)

export default routes