import { BreakpointType } from '@/styles/theme'
import React from 'react'
import Theme from '@/styles/theme'

export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = React.useState<BreakpointType>('xs')

  React.useEffect(() => {
    if (window === undefined) throw new Error('window is undefined')

    window.addEventListener('resize', handleResize)
    handleResize()
  }, [])

  const handleResize = () => {
    const width = window.innerWidth
    if (width < Theme.breakpoints.xs) {
      setBreakpoint('xs')
    } else if (width < Theme.breakpoints.sm) {
      setBreakpoint('sm')
    } else if (width < Theme.breakpoints.md) {
      setBreakpoint('md')
    } else if (width < Theme.breakpoints.lg) {
      setBreakpoint('lg')
    } else {
      setBreakpoint('xl')
    }
  }

  return breakpoint
}
