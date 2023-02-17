import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.scss'
import '@/styles/app.scss'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { NextPageWithLayout } from 'layouts/Default'
import { ThemeProvider } from 'react-bootstrap'

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const pageLayout = Component.PageLayout ?? ((page) => page)
  return (
    <ThemeProvider>{pageLayout(<Component {...pageProps} />)} </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
