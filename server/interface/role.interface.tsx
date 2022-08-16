
export interface ICreateRole {
  fullName: string
  initialName: string
  active: boolean
}

export interface IUpdateRole {
  _id: string
  fullName?: string
  initialName?: string
  active?: boolean
}