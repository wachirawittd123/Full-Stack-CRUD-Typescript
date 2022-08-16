import express from "express"
import { authController } from "../controller/auth.controller"

const authRouter = express.Router()

authRouter
  .post("/login", async (req: express.Request, res: express.Response) => {
    try {
      const result = await authController.login(req.body)
      res.status(200).json({ result })
    } catch (err:any) {
      console.log("err :", err)
      res.status(err?.status || 400).json({ message: err.message })
    }
  })
  .post("/logout", async (req: express.Request, res: express.Response) => {
    try {
      const result = await authController.logout({ _id: req.body._id })
      res.status(200).json({ result })
    } catch (err:any) {
      res.status(err.status || 400).json({ message: err.message })
    }
  })
  .post("/verify", async (req: express.Request, res: express.Response) => {
    try {
      const result = await authController.verifyToken(req.body.token)
      res.status(200).json({ result })
    } catch (err:any) {
      res.status(err.status || 400).json({ message: err.message })
    }
  })

export default authRouter
