import { NextPage } from "next"
import React, { useEffect, useState } from "react"
import { Layout } from 'antd';
import { redirectPage } from "../lib";

export async function getServerSideProps(context: any) {
    return redirectPage(context.req?.cookies?.user)
}

const MainPage: NextPage = () => {
    return (
        <div>
            test
        </div>
    )
}

export default MainPage