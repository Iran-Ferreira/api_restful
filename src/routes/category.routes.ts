import {
    createController,
    getAllController,
    deleteController,
    updateController
} from "../modules/category"

import { Router, Request, Response } from "express"

const routes = Router()

routes.post("/categories", (req: Request, res: Response) => {
    createController.handle(req, res)
})

routes.get("/categories", (req: Request, res: Response) => {
    getAllController.handle(req, res);
})

routes.delete("/categories/:id", (req: Request, res: Response) => {
    deleteController.handle(req, res)
})

routes.put("/categories/:id", (req: Request, res: Response) => {
    updateController.handle(req, res)
})


export default routes