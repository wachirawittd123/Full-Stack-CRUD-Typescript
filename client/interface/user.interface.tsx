import { IRole } from "./role.interface"
export interface IOnFinishLogin {
    email: string
    password: string
}

export interface IUser {
    _id: string
    active: boolean
    createdAt: string
    email: string
    password: string
    provider: string
    rtoken: string
    salt: string
    updatedAt: string
    role: IRole
}

