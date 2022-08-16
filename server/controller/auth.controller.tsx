import passport from "passport"
import { setupLc } from "../auth/passport"
import User, { IUser } from "../model/user.model"
import { refreshToken, signToken, verifyJWT } from "../auth/auth.service"
import { IAuth, IId } from "../interface"
import { userLogController } from "../controller/user-log.controller"

passport.serializeUser((user: any, done: any): void => done(null, user))

passport.deserializeUser((user: any, done: any): void => done(null, user))

setupLc(User)
const authController = {
  login: async (data: IAuth) => {
    return new Promise((resolve, reject): void => {
      passport.authenticate("local", (err: any, user: any, info: any) => {
        const error = err || info
        if (error) {
          return reject(error)
        }
        if (!user) {
          return reject({ status: 400, message: "Something went wrong, please try again." })
        }
        /*LOG*/
        userLogController.createLogLogin({ _id: user?._id })
        return resolve({
          ...user.profile,
          token: signToken(user?.signtoken, data.remember),
          rtoken: refreshToken(user),
        })
      })({ body: data })
    })
  },
  logout: async (user: IId) => {
    userLogController.updateLogLogout({ _id: user._id })
    return User.findOneAndUpdate(
      { _id: user._id },
      { rtoken: "" },
      { new: true }
    )
  },
  verifyToken: async (
    token: string
  ): Promise<{ authorized: boolean; user?: any; error?: any }> => {
    if (!token) {
      return { authorized: false }
    }
    try {
      const result: any = verifyJWT(token)
      const user: IUser | null = await User.findById(result._id).populate("role")
      return { authorized: true, user: user?.profile }
    } catch (err) {
      return { authorized: false, error: err }
    }
  },
}

export { authController }
