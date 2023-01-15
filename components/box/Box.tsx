import styled from 'styled-components'
import { CSSGroups } from '@/styles'

export interface BoxProps {
  children?: React.ReactNode
  center?: boolean
}

const Box = styled.div<BoxProps>`
  ${(props) => props.center && CSSGroups.flexCentered}
`

export default Box
