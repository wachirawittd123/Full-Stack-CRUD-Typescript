import { ICreateRole, IId, IQuerys, IUpdateRole } from "../interface"
import Role from "../model/role.model"

const genQuery = (args: IQuerys) => {
  if (args.query) {
    args.where = {
      $or: [
        { fullName: new RegExp(args.query, "i") },
        { initialName: new RegExp(args.query, "i") },
      ],
    }
  }

  return args.where || {}
}

export const roleController = {
  roles: async (args: IQuerys) => {
    return Role.aggregate([
      {
        $match: {
          ...genQuery(args),
          deletedAt: null,
        },
      },
    ])
      .skip(args.skip || 0)
      .limit(args.limit || 10)
  },
  role: async (args: IId) => {
    return Role.findOne({ _id: args._id })
  },
  create: async (args: ICreateRole, users: any) => {
    if(!users?._id) throw new Error("ไม่พบ users อยู่ในระบบ")
    const result = new Role({
      fullName: args.fullName,
      initialName: args.initialName,
      active: args.active,
      createdBy: users._id,
    })
    const newData = await result.save()
    return newData
  },
  update: async (args: IUpdateRole, users: any) => {
    if(!users?._id) throw new Error("ไม่พบ users อยู่ในระบบ")
    return Role.findOneAndUpdate(
      { _id: args._id },
      {
        $set: {
          fullName: args.fullName,
          initialName: args.initialName,
          active: args.active,
          updatedBy: users._id,
          updatedAt: new Date(),
        },
      },
      { new: true }
    )
  },
  delete: async (args: IId, users: any) => {
    if(!users?._id) throw new Error("ไม่พบ users อยู่ในระบบ")
    return Role.findOneAndUpdate(
      { _id: args._id },
      {
        $set: {
          deletedAt: new Date(),
          deletedBy: users._id,
        },
      },
      {
        new: true,
      }
    )
  },
}
