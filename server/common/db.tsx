import mongoose from "mongoose"
import { MONGO_URL, MONGO_USER, MONGO_PASS } from "./setting"
import User from "../model/user.model"
import Role from "../model/role.model"

// help to debug mongoose
if (process.env.NODE_ENV !== "test") {
  mongoose.set("debug", false)
}
if (process.env.NODE_ENV === "development") {
  mongoose.set("debug", true)
}
let config: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

if (MONGO_USER && MONGO_PASS && process.env.NODE_ENV === "production") {
  config = {
    ...config,
    user: MONGO_USER,
    pass: MONGO_PASS,
    auth: {
      user: MONGO_USER,
      pass: MONGO_PASS,
    },
    authSource: "admin",
  }
}

const connectionDatabase = () => {
  try {
    User.findOne({
      _id: "62f9db115709fb2796ec5e77",
    }).then((user:any) => {
      if (!user) {
        const newRole = new Role({
          fullName: "admin",
          initialName: "admin",
          active: true,
        })
        newRole.save()
        const newUser = new User({
          _id: "62f9db115709fb2796ec5e77",
          active: true,
          role: newRole?._id,
          email: "admin@admin.com",
          password: "admin",
        })
        newUser.save()
      }
    })
    return mongoose.connect(MONGO_URL, config)
  } catch (err: any) {
    if (err) {
      throw new Error(err)
    }
  }
}

export { connectionDatabase }
