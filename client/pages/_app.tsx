import { Layout } from "antd"
import Head from "next/head"
import App from 'next/app'
import { NavbarLayout } from "../components/layout";
import Cookies from "next-cookies"
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps, user }): any {
    return (
        <Layout>
            <Head>
                <title>CRUD-Typescript</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="iApp AI API" />
                <meta
                    property="og:description"
                    content="CRUD-Typescript"
                />
                <meta
                    property="og:image"
                    content="https://storage.googleapis.com/ai-api/AI%20API%20Image/AIAPI.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="https://storage.googleapis.com/ai-api/AI%20API%20Image/AIAPI.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="https://storage.googleapis.com/ai-api/AI%20API%20Image/AIAPI.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="https://storage.googleapis.com/ai-api/AI%20API%20Image/AIAPI.png"
                />
                <link rel="manifest" href="/static/assets/site.webmanifest" />
            </Head>
            <NavbarLayout user={user} />
            <Layout.Content style={{ minHeight: "100%", minWidth: "100%", backgroundColor: "#FFF" }}>
                <Component {...pageProps} />
            </Layout.Content>
        </Layout>
    )
}

MyApp.getInitialProps = async (context:any) => {
    const appProps = await App.getInitialProps(context)
    const { user } = Cookies(context.ctx)
    return { ...appProps, user: user }
}
  

export default MyApp