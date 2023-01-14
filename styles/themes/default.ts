const breakpoints = {
  xs: '0px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1536px',
}

function mediaQuery(size: string, direction: 'min' | 'max' = 'min') {
  return `@media screen and (${
    direction === 'max' ? 'max' : 'min'
  }-width: ${size})`
}

const colors = {
  primary: '#1877F2',
  primaryDark: '#1C3D68',
  primaryLight: '#2986ff',
  secondary: '#e31235',
  secondaryDark: '#c70a29',
  secondaryLight: '#f52043',
  background: 'white',
  text: '#5a576b',
  textLight: '#74808f',
  textDark: '#363440',
  textLighter: '#a7a7a7',
  textDarker: '#1a1a1a',
  error: '#f44336',
  info: '#2196f3',
  success: '#4caf50',
  gray100: '#f8f9fa',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400: '#ced4da',
  gray500: '#adb5bd',
  gray600: '#6c757d',
  gray700: '#495057',
  gray800: '#343a40',
  gray900: '#212529',
}

const theme = {
  media: {
    xs: mediaQuery(breakpoints.xs, 'max'),
    sm: mediaQuery(breakpoints.sm),
    md: mediaQuery(breakpoints.md),
    lg: mediaQuery(breakpoints.lg),
    xl: mediaQuery(breakpoints.xl),
    smMax: mediaQuery(breakpoints.xs, 'max'),
    mdMax: mediaQuery(breakpoints.md, 'max'),
    lgMax: mediaQuery(breakpoints.lg, 'max'),
  },
  colors: colors,
}
export default theme
