import React from "react";
import { Layout, Row, notification } from "antd";
import styled from "styled-components";
import { IDataUser } from "../../interface";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie"

export const NavbarLayout: React.FC<IDataUser> = ({ user }) => {
    const router = useRouter()

    const nextPage = (url: string) => router.push(url?.toString())

    const signOut = async() => {
        try {
            const result = await axios({
                method: "post",
                url: "/api/auth/logout",
                data: {
                    _id: user?._id
                }
            })
            if(result?.status === 200) {
                notification.success({
                    message: "สำเร็จ",
                    description: "ออกจากระบบสำเร็จ"
                })
                Cookies.remove("user")
                return nextPage("/login")
            } 
        } catch(err:any) {
            return notification.error({
                message: "ไม่สำเร็จ",
                description: err?.toString()
            })
        }
    } 

    return (
        <HeaderStyled>
            <Row justify="space-between" align="middle">
                <BodyLogo onClick={() => nextPage("/")}>
                    <img 
                        alt="logo" 
                        src="/static/images/logo.png" 
                        style={{ width: 50 }}
                    />
                </BodyLogo>
                <MenuStyled onClick={async() => user?._id ? await signOut() : nextPage("/login")}>
                    {user?._id ? "ออกจากระบบ" : "เข้าสู่ระบบ"}
                </MenuStyled>
            </Row>
        </HeaderStyled>
    )
}

const HeaderStyled = styled(Layout.Header)`
  z-index: 1001;
  color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  height: 70px;
  @media only screen and (max-width: 767px) {
    padding: 0px 20px;
  }
  width: 100%;
`

const MenuStyled = styled.div`
  font-size: 16px;
  cursor: pointer;
`

const BodyLogo = styled.div`
    cursor: pointer;
` 