import mongoose, { Schema, Document } from "mongoose"

export interface IUserLog extends Document {
  _id: string
  userID: string
  loginTime: Date
  logoutTime: Date
  createdAt: Date
  updatedAt: Date
}
const UserLogSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  loginTime: {
    type: Date,
  },
  logoutTime: {
    type: Date,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
})

UserLogSchema.pre("save", function (this: IUserLog, next) {
  const now = new Date()
  if (!this.createdAt) {
    this.createdAt = now
  }
  this.updatedAt = now
  next()
})

const UserLog = mongoose.model<IUserLog>("user_logs", UserLogSchema)
export default UserLog
