import type { StyledComponentProps } from '@/styles/theming'
import styled from 'styled-components'

interface BoxProps extends StyledComponentProps {
  children?: React.ReactNode
}

const StyledBox = styled.div<BoxProps>`
  ${(props) => props.css}
`

export default function Box(props: BoxProps) {
  return <StyledBox {...props}>{props.children}</StyledBox>
}
