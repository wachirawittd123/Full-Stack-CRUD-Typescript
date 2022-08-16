import { NextPage } from "next"
import React, { useCallback, useEffect, useState } from "react"
import { Row, Col, Table, notification, Tag, Dropdown, Menu, Modal } from 'antd';
import { redirectPage } from "../lib";
import { HeaderLayout } from "../components";
import { UserOutlined, MoreOutlined, DeleteFilled, EditOutlined, TeamOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { IQuery, IUser } from "../interface";
import { useRouter } from "next/router";
import axios from "axios";
import moment from "moment"


export async function getServerSideProps(context: any) {
    return redirectPage(context.req?.cookies?.user)
}

const MainPage: NextPage = () => {
    const router = useRouter()
    const [data, setData] = useState<IUser []>([])
    const [loading, setLoading] = useState<boolean>(false)
    let pageSize: number = 10
    const defaultQuery: IQuery = {
        query: "",
        where: {},
        skip: 0,
        limit: pageSize
    }
    const [filter, setFilter] = useState<IQuery>(defaultQuery)
    const [page, setPage] = useState<number>(1)
    const [totalPage, setTotalPage] = useState<number>(0)

    const menu = (values: IUser) => {
        return (
            <Menu>
                <Menu.Item
                    key="1"
                    style={{ width: "100%" }}
                    icon={<TeamOutlined />}
                >
                    {values?.email}
                </Menu.Item>
                <Menu.Item
                    key="2"
                    style={{ width: "100%" }}
                    icon={<EditOutlined />}
                    onClick={() => {
                    
                    }}
                >
                    Edit User
                </Menu.Item>
                <Menu.Item
                    key="3"
                    style={{ width: "100%" }}
                    icon={<DeleteFilled />}
                    onClick={() => {
                        Modal.confirm({
                            title: 'Are you sure delete this user?',
                            icon: <ExclamationCircleOutlined />,
                            okText: 'Yes',
                            okType: 'danger',
                            cancelText: 'No',
                            onOk() {
                              console.log('OK');
                            },
                        });
                    }}
                >
                    Delete User
                </Menu.Item>
            </Menu>
        )
    }

    const columns = [
        {
            title: "No",
            dataIndex: 'no',
            key: 'no',
        },
        {
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            render: (_:IUser, values: IUser) => <span>{values?.role?.fullName}</span>
        },
        {
            title: 'Create At',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (_:IUser, values: IUser) => <span>{moment(values?.createdAt).format("DD/MM/YYYY h:mm:ss")}</span>
        },
        {
            title: 'Active',
            dataIndex: 'active',
            key: 'active',
            render: (_:IUser, values: IUser) => 
                <Tag 
                    color={values?.active === true ? "green" : "volcano"}
                >
                    {values?.active === true ? "Active" : "Inactive"}
                </Tag>
        },
        {
            title: '',
            dataIndex: '',
            key: '',
            render: (_:IUser, values: IUser) => 
              <Dropdown  overlay={menu(values)}>
                  <MoreOutlined style={{ fontSize: 25, color: "#BCBCBC" }} />
              </Dropdown>
            
        }
    ];

    useEffect(() => {
        queryData(filter)
    },[])

    const queryData = async(filter: IQuery) => {
        setLoading(true)
        try {
            const result = await axios({
                method: "get",
                url: "/api/user",
                data: filter
            }).catch((err: any) => {
                return err
            })
            if(result?.status === 200) {
                if(result?.data?.result[0]?.results?.length > 0) {
                    setData(result?.data?.result[0]?.results)
                    setTotalPage(result?.data?.result[0]?.total)
                } else {
                    setData([])
                    setTotalPage(0)
                }
            } else if (result?.status === 401) {
                notification.error({
                    message: "ไม่สำเร็จ",
                    description: "กรุณาเข้าสู่ระบบ"
                })
                router.push("/login")
            }
        } catch(err: any) {
            notification.error({
                message: "ไม่สำเร็จ",
                description: err?.toString()
            })
        }
        setLoading(false)
        return;
    }

    const onFinish = async(values: any, cond: string) => {
        
    }

    const onChangePage = useCallback(async(page: number) => {
        let newFilter = {...filter, skip: (page - 1) * pageSize}
        setFilter(newFilter)
        setPage(page)
        await queryData(newFilter)
    },[page])   

    return (
        <Row justify="end">
            <HeaderLayout icon={<UserOutlined />} title="Manage User" />
            <Col span={24}>
                <Table 
                    dataSource={data?.map((e:IUser, i: number) => {
                        return {...e, no: i + 1}
                    })} 
                    columns={columns}
                    pagination={{
                        current: page,
                        total: totalPage,
                        pageSize: pageSize,
                        onChange: onChangePage,
                        showSizeChanger: false
                    }}
                />
            </Col> 
        </Row>
    )
}

export default MainPage