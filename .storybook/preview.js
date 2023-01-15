import '/styles/globals.css'
import GlobalStyle from '/styles/globals'
import theme from '@/styles/theme'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import { RouterContext } from 'next/dist/shared/lib/router-context'

import React from 'react'

import { ThemeProvider } from 'styled-components'

import * as NextImage from 'next/image'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const decorators = [
  (Story) => (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    </I18nextProvider>
  ),
]

export const parameters = {
  nextRouter: {
    path: '/',
    asPath: '/',
    query: {},
    push() {},
    Provider: RouterContext.Provider,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
