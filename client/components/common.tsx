import { Col, Divider, Typography, Row, Spin } from "antd"
import { IHeader } from "../interface"

export const HeaderLayout: React.FC<IHeader> = ({ title, icon }) => {
    return (
        <Col span={24}>
            <Typography.Text style={{ fontSize: 20, fontWeight: "bold" }}>
               {icon} {title}
            </Typography.Text>
            <Divider />
        </Col>
    )
}

export const Loading: React.FC<{loading: boolean}> = ({ loading }) => {
    return (
        <Row justify="center" align="middle">
            <Spin />
        </Row>
    )
}