import { CSSObject } from 'styled-components'
import { DefaultTheme } from 'styled-components'

type VariantType = 'contained' | 'underline' | 'text' | 'outlined'
type ColorType = DefaultTheme['colors']

export interface CssProps {
  css?: CSSObject
}

export interface VariantProps {
  variant: VariantType
}

export interface ColorProps {
  color: ColorType
}
