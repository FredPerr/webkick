import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  PageLayout?: (page: React.ReactElement) => React.ReactNode
}

export type LayoutProps = {
  children: React.ReactNode
  pageName: string
}

export default function Layout({ children, pageName }: LayoutProps) {
  return (
    <>
      <Head>
        <title>WebKick - Sites Web pour PME</title>
        <meta
          property="og:title"
          content="WebKick - Sites Web pour PME"
          key="title"
        />
        <meta
          property="og:description"
          content="Commandez votre site et déployez-le rapidement! Soumission en 24H-48H et paiements en 12 mois à 0% d'intérêt. 100% de satisfaction garantie."
        />
        <meta
          name="description"
          content="Commandez votre site et déployez-le rapidement! Soumission en 24H-48H et paiements en 12 mois à 0% d'intérêt. 100% de satisfaction garantie."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:image"
          content="/images/favicons/favicon-32x32.png"
        />
        <meta name="keywords" content="site web, PME, québec" key="desc" />
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
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
