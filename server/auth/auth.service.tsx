import express from "express"
import crypto from "crypto"
import jwt from "jsonwebtoken"
import moment from "moment"
import {
  JWT_SECRET,
  RTOKEN_EXPIRE,
  TOKEN_EXPIRE,
} from "../common/setting"
import { IUser } from "../model/user.model"
import { authController } from "../controller/auth.controller"

export const randCode = (): string => crypto.randomBytes(48).toString("hex")

export const signToken = (data: IUser, remember?: boolean): string => {
  let expire = TOKEN_EXPIRE
  if (remember) {
    expire = expire * 2
  }

  return jwt.sign(data, JWT_SECRET, {
    expiresIn: "24h",
  })
} // This project will not auto refetch token
export const refreshToken = (data: IUser): string => {
  const end = moment(data.updatedAt || data.createdAt)
  const now = moment()
  let time = end

  if (end) {
    const duration = moment.duration(now.diff(end))
    const days = duration.asDays()
    if (days > RTOKEN_EXPIRE) {
      time = now
    }
  }

  const rtoken: string = crypto
    .pbkdf2Sync(
      `${data._id} ${data.password} ${time.format("YYYY-MM-DD HH:mm:ss")}`,
      JWT_SECRET,
      10000,
      100,
      "sha1"
    )
    .toString("base64")

  if (data.rtoken !== rtoken) {
    data.rtoken = rtoken
    data.save()
  }
  return rtoken
}

export const verifyJWT = (token: string): object | string => {
  return jwt.verify(String(token).replace("Bearer ", ""), JWT_SECRET)
}

export const authenticate = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if(req.originalUrl === "/camera/camera-feature") {
    const apikey = req.headers.apikey || ""
    if(apikey !== "moi-secret") {
      res.status(407).json({ message: "กรุณากรอก apikey" })
      next(new Error("กรุณากรอก apikey"))
    }
    return next()
  } 
  const token = req.headers.authorization || ""
  const verify = await authController.verifyToken(token)
  if (!verify?.authorized) {
    res.status(401).json({ message: "กรุณาเข้าสู่ระบบ" })
    next(new Error("กรุณาเข้าสู่ระบบ"))
  }
  req.user = verify.user
  next()
}
