
export interface ICookieUser {
    _id: string
    email: string
    token: string
}

export interface IDataUser {
    user: ICookieUser
}