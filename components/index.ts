import { DefaultTheme } from 'styled-components'

export type VariantType = 'contained' | 'underline' | 'text' | 'outlined'

export interface VariantProps {
  variant: VariantType
}

export interface ColorProps {
  color: keyof DefaultTheme['colors']
}
