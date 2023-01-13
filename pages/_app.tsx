import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { DefaultLayout } from 'layouts'
import { NextPageWithLayout } from 'layouts/Default'
import { NextPage } from 'next'
import { ReactElement } from 'react'

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const pageLayout = Component.PageLayout ?? ((page) => page)
  return pageLayout(<Component {...pageProps} />)
}

// @ts-ignore
export default appWithTranslation(MyApp)
