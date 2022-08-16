export interface ICookieUser {
    _id: string
    email: string
    token: string
}
export interface IDataUser {
    user: ICookieUser
}

export interface IMenuSider {
    key: string
    name: string
    path: string
    icon: any
}
export interface IHeader {
    title: string
    icon: any
}

export interface IQuery {
    query: string
    where: any
    skip: number
    limit: number
}

