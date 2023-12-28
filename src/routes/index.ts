import { Router } from "express"
import UserRoutes from "./user.routes"

const routes = Router()

routes.use(UserRoutes)

export default routes