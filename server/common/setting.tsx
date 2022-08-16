import path from "path"
import fs from "fs"
import dotenv from "dotenv"
import { IObjStrNum } from "../interface"

const env = process.env.NODE_ENV
const envFile: string = `.env.${env}`

if (fs.existsSync(envFile)) {
  console.log(`Using ${envFile} file to supply config environment variables`)
  dotenv.config({ path: envFile })
}

export const PORT: string = process.env.PORT || ""
export const MONGO_URL: string = process.env.MONGO_URL || ""
export const MONGO_USER: string = process.env.MONGO_USER || ""
export const MONGO_PASS: string = process.env.MONGO_PASS || ""
export const JWT_SECRET: string = process.env.JWT_SECRET || ""
export const NODE_ENV: string = process.env.NODE_ENV || ""

export const ROLE: IObjStrNum = {
    admin: 0,
    user: 1,
}

export const TOKEN_EXPIRE: number = 2592000000

export const RTOKEN_EXPIRE: number = TOKEN_EXPIRE

export const MAX_AGE = TOKEN_EXPIRE * 1000
