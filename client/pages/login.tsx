import { NextPage } from "next"
import styled from "styled-components"
import React from "react"
import { Row, Col, Typography, Form, Input, Button, notification } from "antd"
import { IOnFinishLogin } from "../interface"
import axios from "axios"
import { useRouter } from "next/router"
import Cookies from "js-cookie"

const LoginPage: NextPage = () => {
    const router = useRouter()
    const [form] = Form.useForm()
    
    const onFinish = async(values: IOnFinishLogin) => {
        try {
            const result:any = await axios({
                method: "post",
                url: "/api/auth/login",
                data: values
            })
            if(result?.status === 200) {
                notification.success({
                    message: "สำเร็จ",
                    description: "เข้าสู้ระบบสำเร็จ"
                })
                Cookies.set("user", JSON.stringify({
                    email: result?.data?.result?.email,
                    _id: result?.data?.result?._id,
                    token: result?.data?.result?.token
                }))
                form.resetFields()
                return router.push("/")
            } 
        } catch(err:any) {
            return notification.error({
                message: "ไม่สำเร็จ",
                description: err?.toString()
            })
        }
    }

    return (
        <Row style={{ width: "100%",minHeight: "100vh" }}>
            <Col xxl={18}>
                <img 
                    alt="bg-login" 
                    src="/static/images/bg-login.jpg"
                    style={{ width: "100%", height: "100%" }} 
                />
            </Col>
            <BodyLogin xxl={6}>
                <Row justify="center" align="middle" >
                    <Col span={24} style={{ textAlign: "center", marginTop: "50%" }} >
                        <Typography.Text
                            strong
                            style={{ fontSize: "68px", color: "#0C82D6" }}
                        >
                            เข้าสู่ระบบ
                        </Typography.Text>
                    </Col>
                    <Col span={16} style={{ marginTop: 50 }}>
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="E-mail"
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                                <Button type="primary" htmlType="submit" style={{ width: 150, marginTop: 30 }}>
                                    Login
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </BodyLogin>
        </Row>
    )
}

const BodyLogin = styled(Col)`
    width: 100%;
    height: 100%;
    background-color: #FFF;
`

export default LoginPage