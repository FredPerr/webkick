import '/styles/globals.css'
import GlobalStyle from '/styles/globals'
import theme from '/styles/themes/default'

import React from 'react'

import { ThemeProvider } from 'styled-components'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {Story()}
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
