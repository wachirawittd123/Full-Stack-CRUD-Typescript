import { ICookieUser } from "../interface"

export const redirectPage = (user:any) => {
    if(user) {
        const  getCookie: ICookieUser = JSON.parse(user)
        return {
            props: {
                user: getCookie
            }
        }
    } else {
        return {
            redirect: {
                destination: "/login",
                permanent: false
            }
        }
    }
}