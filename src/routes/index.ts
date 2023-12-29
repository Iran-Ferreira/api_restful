import { Router } from "express"
import UserRoutes from "./user.routes"
import CategoryRoutes from "./category.routes"
import VideoRoutes from "./video.routes"

const routes = Router()

routes.use(UserRoutes)
routes.use(CategoryRoutes)
routes.use(VideoRoutes)

export default routes