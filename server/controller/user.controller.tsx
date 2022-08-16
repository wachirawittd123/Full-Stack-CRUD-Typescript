import { ICreateUser, IId, IQuerys, IUpdateUser } from "../interface"
import User, { IUser } from "../model/user.model"

const genQuery = (args: IQuerys) => {
  if (args.query) {
    args.where = {
      $or: [
        {
          email: new RegExp(args.query, "i"),
        },
      ],
    }
  }
  return args.where || {}
}

export const userController = {
  users: async (args: IQuerys) => {
    return User.aggregate([
      {
        $lookup: {
          from: "roles",
          localField: "role",
          foreignField: "_id",
          as: "role"
        }
      },
      {
        $unwind: {
          path: "$role",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $match: {
          ...genQuery(args),
          deletedAt: null,
        },
      },
      {
        $facet: {
          metaData: [{ $count: "total" }],
          results: [{ $skip: args.skip || 0 }, { $limit: args.limit || 10 }],
        },
      },
      {
        $project: {
          total: {
            $arrayElemAt: ["$metaData.total", 0],
          },
          results: 1,
        },
      },
      // {
      //   $project: {
      //     _id: 1,
      //     email: 1,
      //     role: 1,
      //     active: 1,
      //     createdAt: 1,
      //     createdBy: 1,
      //   }
      // }
    ])
  },
  user: async (args: IId) => {
    let newProfile = await User.findOne({ _id: args._id }).populate("role")
    return newProfile
  },
  create: async (args: ICreateUser, users: any) => {
    if(!users?._id) throw new Error("ไม่พบ users อยู่ในระบบ")
    const result = new User({
      email: args.email,
      password: args.password,
      role: args.role,
      active: args.active,
      createdBy: users._id,
    })
    const newData = await result.save()
    return newData.profile
  },
  update: async (args: IUpdateUser, users: any) => {
    if(!users?._id) throw new Error("ไม่พบ users อยู่ในระบบ")
    return User.findOneAndUpdate(
      {
        _id: args._id,
      },
      {
        $set: {
          email: args.email,
          role: args.role,
          active: args.active,
          updatedBy: users._id,
          updatedAt: new Date(),
        },
      },
      {
        new: true,
        upsert: true
      }
    )
  },
  delete: async (args: IId, users: any) => {
    if(!users?._id) throw new Error("ไม่พบ users อยู่ในระบบ")
    return User.findOneAndUpdate(
      {
        _id: args._id,
      },
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
