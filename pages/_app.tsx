import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { NextPageWithLayout } from 'layouts/Default'
import GlobalStyles from 'styles/globals'
import { ThemeProvider } from 'styled-components'
import Theme from 'styles/theme'

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const pageLayout = Component.PageLayout ?? ((page) => page)
  return pageLayout(
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>,
  )
}

// @ts-ignore
export default appWithTranslation(MyApp)
