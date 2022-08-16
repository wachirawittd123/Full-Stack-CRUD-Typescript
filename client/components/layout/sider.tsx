import React, { useState } from "react";
import { Layout, Menu, Button, Row } from "antd";
import styled from "styled-components";
import { IDataUser, IMenuSider } from "../../interface";
import { useRouter } from "next/router";
import { UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

export const SiderLayout: React.FC<IDataUser> = ({ user }) => {
    const router = useRouter()
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const dataMenu = [
        {
            key: "",
            name: "Manage User",
            path: "/",
            icon: <UserOutlined />
        }
    ]
    
    return (
        <SiderStyled width={collapsed ? "200px" : "45px"}>
            <Row justify={collapsed ? "center" : "end"}>
                <Button type="text" onClick={() => setCollapsed(!collapsed)} style={{ marginBottom: 16 }}>
                    {collapsed ? <MenuUnfoldOutlined style={{ color: "#FFF" }} /> : <MenuFoldOutlined style={{ color: "#FFF" }} />}
                </Button>
            </Row>
            <Menu
                mode="inline"
                defaultOpenKeys={[router?.pathname?.split("/")[0]]}
                inlineCollapsed={collapsed}
            >
                {
                    dataMenu?.map((e:IMenuSider) => 
                        <Menu.Item 
                            key={e?.key}
                            icon={e?.icon}
                            onClick={() => router.push(e?.path)}
                        >
                            {e?.name}
                        </Menu.Item>
                    )
                }
            </Menu>
        </SiderStyled>
    )
}

const SiderStyled = styled(Layout.Sider)<{width: string}>`
  width: ${(props) => props.width || "250px"};
  min-height: 100vh;
`