import { CSSObject } from 'styled-components'
import { Color } from '@/styles/theme/colors'

export { default as Button } from './button'
export { default as Box } from './box'

export interface StyledComponentProps {
  css?: CSSObject
}

export interface VariantComponentProps {
  color: Color
  variant: string
}

export interface HoverComponentProps {
  hoverFgColor: Color
  hoverBgColor: Color
}

export interface StyledContainerProps {
  containerCss?: CSSObject
}
