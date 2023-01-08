import { createTheme } from '@nextui-org/react'

export default createTheme({
    type: 'dark',
    theme: {
        // Override theme attributes (for more information see https://nextui.org/docs/theme/customize-theme).
        colors: {
            background: '#262626',
            primary: '#1877F2',
            secondary: '#353535',
        },
        fonts: {
            sans: "'Roboto', sans-serif",
        },
        letterSpacings: {
            tighter: '0.5px',
        },
    },
})
