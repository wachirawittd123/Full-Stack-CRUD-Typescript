
export interface IObjStrNum {
    [key: string]: number
}

export interface IQuerys {
    query?: string
    where?: any
    sort?: string
    skip?: number
    limit: number
}

export interface IId {
    _id: string
}