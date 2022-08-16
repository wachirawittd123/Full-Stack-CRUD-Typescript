import passport from "passport"
import { Strategy } from "passport-local"

interface CallbackType {
  (error: any, user: any, message: any): void
}

const Authenticate = (
  User: any,
  email: string,
  password: string,
  done: CallbackType
) => {
  User.findOne({ email })
    .populate("role")
    .exec()
    .then(async (user: any): Promise<any> => {
      console.log('Authenticate==========>',user)
      if (!user) {
        return done(undefined, false, {
          message: "Username not found!",
        })
      }
      if (!user.active) {
        return done(undefined, false, {
          message: "Your account has been inactive.",
        })
      }
      //check password has expired
      // const now = moment().format('YYYY-MM-DD')
      // const expire = moment(user.pwExpiredOn).format('YYYY-MM-DD')
      // if(now === expire){
      //   return done(undefined, false, {
      //     message: "Your password has expired, Please check your email to set a new password"
      //   })
      // }
      user.authenticate(password, (authError: any, authenticated: any) => {
        if (authError) {
          return done({ status: 400, message: authError }, false, {
            message: authError,
          })
        }
        if (authenticated) {
          // user.loginFailedCount = 0
          return done(undefined, user, null)
        } else {
          return done(undefined, false, {
            message: `เข้าสู่ระบบผิดพลาด `,
          })
        }
      })
    })
    .catch((err: any) =>
      done(err, false, { message: "Something went wrong, please try again." })
    )
}

export const setupLc = (User: any): void => {
  passport.use(
    new Strategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      function (email: string, password: string, done: CallbackType) {
        return Authenticate(User, email, password, done)
      }
    )
  )
}
