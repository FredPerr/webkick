import mediaQuery from '@/styles/media'
import breakpoints from '@/styles/theme/breakpoints'

export default {
  xs: mediaQuery(breakpoints.xs, 'max'),
  sm: mediaQuery(breakpoints.sm),
  md: mediaQuery(breakpoints.md),
  lg: mediaQuery(breakpoints.lg),
  xl: mediaQuery(breakpoints.xl),
  smMax: mediaQuery(breakpoints.sm, 'max'),
  mdMax: mediaQuery(breakpoints.md, 'max'),
  lgMax: mediaQuery(breakpoints.lg, 'max'),
}
