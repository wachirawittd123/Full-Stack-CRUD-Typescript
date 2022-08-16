import express from "express"
import { userController } from "../controller/user.controller"

const userRouter = express.Router()

userRouter
  .get("/", async (req: express.Request, res: express.Response) => {
    try {
      const result = await userController.users(req.body)
      res.status(200).json({ result })
    } catch (err:any) {
      res.status(err.status || 400).json({ message: err.message })
    }
  })
  .get("/:id", async (req: express.Request, res: express.Response) => {
    try {
      const result = await userController.user({ _id: req.params.id })
      res.status(200).json({ result })
    } catch (err:any) {
      res.status(err.status || 400).json({ message: err.message })
    }
  })
  .post("/create", async (req: express.Request, res: express.Response) => {
    try {
      const result = await userController.create(req.body, req.user)
      res.status(200).json({ result })
    } catch (err:any) {
      res.status(err.status || 400).json({ message: err.message })
    }
  })
  .post("/update/:id", async (req: express.Request, res: express.Response) => {
    try {
      const result = await userController.update(
        { _id: req.params.id, ...req.body },
        req.user
      )
      res.status(200).json({ result })
    } catch (err:any) {
      res.status(err.status || 400).json({ message: err.message })
    }
  })
  .delete("/delete/:id", async (req: express.Request, res: express.Response) => {
    try {
      const result = await userController.delete(
        { _id: req.params.id },
        req.user
      )
      res.status(200).json({ result })
    } catch (err:any) {
      res.status(err.status || 400).json({ message: err.message })
    }
  })

export default userRouter
