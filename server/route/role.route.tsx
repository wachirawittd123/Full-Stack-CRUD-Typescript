import express from "express"
import { roleController } from "../controller/role.controller"

const roleRoute = express.Router()

roleRoute
  .get("/", async (req: express.Request, res: express.Response) => {
    try {
      const result = await roleController.roles(req.body)
      res.status(200).json({ result })
    } catch (err:any) {
      res.status(err.status || 400).json({ message: err.message })
    }
  })
  .get("/:id", async (req: express.Request, res: express.Response) => {
    try {
      const result = await roleController.role({ _id: req.params.id })
      res.status(200).json({ result })
    } catch (err:any) {
      res.status(err.status || 400).json({ message: err.message })
    }
  })
  .post("/create", async (req: express.Request, res: express.Response) => {
    try {
      const result = await roleController.create(req.body, req.user)
      res.status(200).json({ result })
    } catch (err:any) {
      res.status(err.status || 400).json({ message: err.message })
    }
  })
  .post("/update/:id", async (req: express.Request, res: express.Response) => {
    try {
      const result = await roleController.update(
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
      const result = await roleController.delete(
        { _id: req.params.id },
        req.user
      )
      res.status(200).json({ result })
    } catch (err:any) {
      res.status(err.status || 400).json({ message: err.message })
    }
  })

export default roleRoute
