import mongoose, { Document, Schema } from "mongoose"

export interface IRole extends Document {
  fullName: string
  initialName: string
  active: boolean
  createdBy: String
  updatedBy: String
  deletedBy: String
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}

const RoleSchema = new Schema<IRole>({
  fullName: {
    type: String,
    required: true,
  },
  initialName: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  updatedBy: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  deletedBy: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
})

RoleSchema.pre<IRole & Document>(
  "save",
  function (this: any, next: any): any {
    const now = new Date()

    if (!this.createdAt) {
      this.createdAt = now
    } else {
      this.updatedAt = now
    }
    next()
  }
)

const Role = mongoose.model<IRole>("roles", RoleSchema)

export default Role
