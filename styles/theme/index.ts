const Colors = {
  primary: '#038aa6',
  primaryLight: '#00d4ff',
  primaryDark: '#0a2540',
  primaryDarker: '#071d33',
  primaryLighter: '#a7eefc',

  secondary: '#635bff',
  secondaryLight: '#7a73ff',
  secondaryDark: '#403b9c',
  secondaryDarker: '#302c7d',
  secondaryLighter: '#8e88f7',

  text: '#425466',
  textLight: '#a4b5c4',
  textDark: '#0a2540',
  textLighter: '#f1f0fc',
  textDarker: '#05182b',

  background: '#ffffff',
  backgroundPaper: '#fcffff',
  backgroundPaperDark: '#061f38',

  success: '#6bcc7f',
  error: '#ed4040',
  warning: '#fcd669',
  info: '#f6a4eb',

  gray100: '#f1f0fc',
  gray200: '#e2e2f0',
  gray300: '#d3d3e4',
  gray400: '#c4c4d8',
  gray500: '#b5b5cc',
  gray600: '#a6a6c0',
  gray700: '#9797b4',
  gray800: '#8888a8',
  gray900: '#79799c',
}

const Fonts = "'Poppins', sans-serif"
const FontSizes = {
  xs: 8,
  sm: 11,
  md: 13,
  lg: 16,
  xl: 18,
}
const Radius = {
  none: '0',
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '16px',
  xl: '24px',
  round: '50%',
}

const Spacings = {
  none: '0',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
}

const Shadows = {
  primary: `0 0px 5px 0 ${Colors.primaryLight}05`,
  secondary: `0 0px 5px 0 ${Colors.secondaryLight}05`,
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px 0px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px 0px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px 0px rgba(0, 0, 0, 0.1)',
}

const Breakpoints = {
  xs: 480,
  sm: 900,
  md: 1280,
  lg: 1650,
  xl: 1920,
}

const MediaQueries = {
  xs: `@media (max-width: ${Breakpoints.xs}px)`,
  sm: `@media (min-width: ${Breakpoints.sm}px) and (max-width: ${Breakpoints.md}px)`,
  md: `@media (min-width: ${Breakpoints.md}px) and (max-width: ${Breakpoints.lg}px)`,
  lg: `@media (min-width: ${Breakpoints.lg}px) and (max-width: ${Breakpoints.xl}px)`,
  xl: `@media (min-width: ${Breakpoints.xl}px)`,
  smMax: `@media (max-width: ${Breakpoints.sm}px)`,
  mdMax: `@media (max-width: ${Breakpoints.md}px)`,
  lgMax: `@media (max-width: ${Breakpoints.lg}px)`,
  xlMax: `@media (max-width: ${Breakpoints.xl}px)`,

  smMin: `@media (min-width: ${Breakpoints.sm}px)`,
  mdMin: `@media (min-width: ${Breakpoints.md}px)`,
  lgMin: `@media (min-width: ${Breakpoints.lg}px)`,
  xlMin: `@media (min-width: ${Breakpoints.xl}px)`,
}

const Theme = {
  colors: Colors,
  fonts: Fonts,
  fontSizes: FontSizes, // Root font sizes for each media breakpoint
  radius: Radius,

  // Spacing between elements
  spacing: Spacings,

  // Shadows
  shadows: Shadows,
  breakpoints: Breakpoints,
  media: MediaQueries,
}

export default Theme
export type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ColorType = keyof typeof Colors
export type ThemeType = typeof Theme
