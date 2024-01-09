import {
    createController,
    getAllController,
    getOneController,
    deleteController,
    updateController

} from "../modules/video"

import { Router, Request, Response } from 'express'

const routes = Router()

routes.post("/videos", (req: Request, res: Response) => {
    createController.handle(req, res)
})

routes.get("/videos", (req: Request, res: Response) => {
    getAllController.handle(req, res);
})

routes.get("/videos/:id", (req: Request, res: Response) => {
    getOneController.handle(req, res);
})

routes.delete("/videos/:id", (req: Request, res: Response) => {
    deleteController.handle(req, res)
})

routes.put("/videos/:id", (req: Request, res: Response) => {
    updateController.handle(req, res)
})

export default routes