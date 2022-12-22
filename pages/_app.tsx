import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { NextPageWithLayout } from '@/layouts/Layout'
import theme from '@/styles/themes/index'
import React from 'react'


interface IAppProps extends AppProps {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: IAppProps) {
  const layout = Component.layout ?? ((page) => page)
  return layout(
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
  )
}