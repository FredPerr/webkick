import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

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
                <title>WebKick</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta
                    property="og:title"
                    content="WebKick - Création de site Web pour les entreprises"
                    key="title"
                />
                <meta
                    property="og:description"
                    content="Obtenez votre soumission en 24H-48H pour obtenir votre site Web rapidement et à un prix adaptatif à vos besoin. Payez après la réception en 12 mois à 0%!"
                />
                <meta
                    name="description"
                    content="Obtenez votre soumission en 24H-48H pour obtenir votre site Web rapidement et à un prix adaptatif à vos besoin. Payez après la réception en 12 mois à 0%!"
                />
                <meta
                    property="og:image"
                    content="/favicon/favicon-32x32.png"
                />
                <meta
                    name="keywords"
                    content="agence web, site web entreprise, création web"
                    key="desc"
                />
                <meta name="msapplication-TileColor" content="#FFFFFF" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/images/favicons/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/images/favicons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/images/favicons/favicon-16x16.png"
                />
                <link rel="manifest" href="/images/favicons/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/images/favicons/safari-pinned-tab.svg"
                    color="#40c75e"
                />
                <meta name="google" content="nositelinkssearchbox" />
                <meta name="google" content="notranslate" />
            </Head>
            {children}
        </>
    )
}
