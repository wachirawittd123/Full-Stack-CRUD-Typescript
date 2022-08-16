export interface IAuth {
    email: string
    password: string
    name: string
    tel: string
    type: string
    remember?: boolean
}
  
export interface ICode {
    code: string
}

export interface IToken {
    email: string
    rtoken: string
}

export interface IResetPwd {
    ftoken: string
    password: string
}