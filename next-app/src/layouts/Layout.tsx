import React from "react"
import { NextPage } from "next"
import Head from "next/head"
import website from "@/constants/website"


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    layout?: (page: React.ReactElement) => React.ReactNode
}

export type LayoutProps = {
    children: React.ReactNode
}


export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>{website.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content={website.title} key="title" />
                <meta property="og:description" content={website.description} />
                <meta name="description" content={website.description} />
                <meta property="og:image" content="/favicon/favicon-32x32.png" />
                <meta name="keywords" content={website.keywords} key="desc" />
                <meta name="msapplication-TileColor" content="#FFFFFF" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
                <link rel="manifest" href="/images/favicons/site.webmanifest" />
                <link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg" color="#40c75e" />
                <meta name="google" content="nositelinkssearchbox" />
                <meta name="google" content="notranslate" />
            </Head>
            {children}
        </>
    )
}