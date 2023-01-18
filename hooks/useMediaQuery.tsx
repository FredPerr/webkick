import { BreakpointType } from '@/styles/theme'
import React from 'react'
import { useTheme } from 'styled-components'

export default function useMediaQuery() {
  const [mediaQuery, setMediaQuery] = React.useState<BreakpointType>('xs')
  const theme = useTheme()

  React.useEffect(() => {
    if (window === undefined) throw new Error('window is undefined')
    Object.keys(theme.breakpoints).forEach((breakpoint) => {
      window
        .matchMedia(theme.media[breakpoint as BreakpointType])
        .addEventListener('change', (e) => {
          if (e.matches) {
            setMediaQuery(breakpoint as BreakpointType)
          }
        })
    })
    console.table()
  }, [])
  return mediaQuery
}
