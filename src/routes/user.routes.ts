import {
    createController,
    getAllController,
    deleteController,
    updateController,
    loginController
} from "../modules/user"

import { Router, Request, Response } from "express"

const routes = Router()

routes.post("/users", (req: Request, res: Response) => {
    createController.handle(req, res)
})

routes.get("/users", (req: Request, res: Response) => {
    getAllController.handle(req, res);
});

routes.delete("/users/:id", (req: Request, res: Response) => {
    deleteController.handle(req, res)
})

routes.put("/users/:id", (req: Request, res: Response) => {
    updateController.handle(req, res)
})

routes.post("/login", (req: Request, res: Response) => {
    loginController.handle(req, res)
})


export default routes