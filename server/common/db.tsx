import mongoose from "mongoose"

import { MONGO_URL, MONGO_USER, MONGO_PASS } from "./setting"

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
    return mongoose.connect(MONGO_URL, config)
  } catch (err: any) {
    if (err) {
      throw new Error(err)
    }
  }
}

export { connectionDatabase }
