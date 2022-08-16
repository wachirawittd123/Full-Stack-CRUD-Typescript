import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import passport from "passport"
import session from "express-session"
import { v4 } from "uuid"
import { JWT_SECRET, PORT, NODE_ENV } from "./common/setting"
import { connectionDatabase } from "./common/db"
import { authenticate } from "./auth/auth.service"

import userRoute from "./route/user.route"
import authRoute from "./route/auth.route"
import roleRoute from "./route/role.route"

const next = require('next')

const dev = NODE_ENV !== "production"
const app = next({ dev, dir: "./client" });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(express.json({ limit: "100mb" }))
    server.use(express.urlencoded({ extended: true }))
    server.use(
      session({
        genid: (_: express.Request): string => v4(),
        secret: JWT_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
          secure: true,
        },
      })
    )
    server.use(cookieParser())
    server.use(cors())
    server.use(passport.initialize())
    server.use(passport.session())
    server.use("/assets", express.static("assets"))
    
    // route
    server.use("/api/auth", authRoute)
    server.use("/api/user", authenticate, userRoute)
    server.use("/api/role", authenticate, roleRoute)

    server.get("*", (req: express.Request, res: express.Response) => {
      return handle(req, res);
    });
    connectionDatabase()
    server.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}`)
        console.log(`🚀 Database ready at PORT 27017`)
    });
  })
  .catch((ex: any) => {
    console.error(ex.stack);
    process.exit(1);
  })
