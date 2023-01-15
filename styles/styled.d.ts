import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string = '#00d4ff'
        light: string = '#80e9ff'
        dark: string = '#0a2540'
        darker: string
        lighter: string
      }

      secondary: {
        main: string = '#635bff'
        light: string
        dark: string
        darker: string
        lighter: string
      }

      text: {
        main: string
        light: string
        dark: string
        lighter: string
        darker: string
      }

      background: {
        main: string = '#ffffff'
        paper: string = '#fcffff'
        paperDark: string = '#061f38'
      }

      success: string
      error: string
      warning: string
      info: string

      gray: {
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
      }
    }

    fonts: string

    // Root font sizes for each media breakpoint
    fontSizes: {
      xs: number = 8
      sm: number = 11
      md: number = 13
      lg: number = 16
      xl: number = 18
    }

    radius: {
      none: string = '0'
      xs: string = '2px'
      sm: string = '4px'
      md: string = '8px'
      lg: string = '16px'
      xl: string = '24px'
      round: string = '50%'
    }

    // Spacing between elements
    spacing: {
      none: string = '0'
      xs: string = '4px'
      sm: string = '8px'
      md: string = '16px'
      lg: string = '24px'
      xl: string = '32px'
      '2xl': string = '48px'
      '3xl': string = '64px'
    }

    // Shadows
    shadows: {
      primary: string = '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
      none: string = 'none'
      xs: string = '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
    }
  }
}
