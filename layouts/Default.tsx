import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import websiteConstants from 'constants/website'
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
  const { t, ready } = useTranslation([pageName])
  const [title, setTitle] = React.useState<string | undefined>()
  const [description, setDescription] = React.useState<string | undefined>()
  React.useEffect(() => {
    const titleValue = t(`${pageName}:title`, '')
    setTitle(`WebKick${titleValue !== '' ? ` - ${titleValue}` : ''}`)
    const descriptionValue = t(`${pageName}:description`, '')
    setDescription(
      descriptionValue !== '' ? descriptionValue : websiteConstants.description,
    )
  }, [ready])
  const keywords = t(`${pageName}:keywords`, '')

  return (
    <>
      <Head>
        <title>{title ? title : websiteConstants.title}</title>
        <meta property="og:title" content={title} key="title" />
        <meta
          property="og:description"
          content={description ? description : websiteConstants.description}
        />
        <meta
          name="description"
          content={description ? description : websiteConstants.description}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:image"
          content="/images/favicons/favicon-32x32.png"
        />
        {keywords && <meta name="keywords" content={keywords} key="desc" />}
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
