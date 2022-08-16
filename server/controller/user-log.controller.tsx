import UserLog, { IUserLog } from "../model/user-log.model"
import { IQuerys, IId } from "../interface"
import { get } from "lodash"

const genQuery = (args: IQuerys) => {
  if (args.query) {
    args.where = {
      $or: [
        {
          "users.email": new RegExp(args.query, "i"),
        },
      ],
    }
  }
  return args.where || {}
}

export const userLogController = {
  userLogs: async (args: IQuerys): Promise<any[]> => {
    return UserLog.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "userID",
          foreignField: "_id",
          as: "users",
        },
      },
      {
        $unwind: {
          path: "$users",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $match: {
          ...genQuery(args),
        },
      },
    ])
      .skip(args.skip || 0)
      .limit(args.limit || 10)
  },
  createLogLogin: async (data: IId): Promise<IUserLog> => {
    const log = new UserLog({
      userID: data._id,
      loginTime: new Date(),
    })
    return log.save()
  },
  updateLogLogout: async (data: IId): Promise<IUserLog | null> => {
    const logs = await UserLog.find({ userID: data._id })
      .sort("-createdOn")
      .limit(1)
    const log = get(logs, [0])
    if (log) {
      log.logoutTime = new Date()
      return log.save()
    }
    return log
  },
}
