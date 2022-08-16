export interface ICreateUser {
    email: string
    password: string
    role: string
    active: boolean
  }
  
export interface IUpdateUser {
    _id: string
    email?: string
    role?: string
    active?: string
}