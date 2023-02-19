import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { NextPageWithLayout } from 'layouts/Default'

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const pageLayout = Component.PageLayout ?? ((page) => page)
  return pageLayout(<Component {...pageProps} />)
}

//@ts-ignore
export default appWithTranslation(MyApp)
