import styled from 'styled-components'
import { StyledComponentProps } from '@/components'

interface BoxProps extends StyledComponentProps {
  children?: React.ReactNode
}

const StyledBox = styled.div.attrs()<BoxProps>`
  ${(props) => props.css}
`

export default function Box(props: BoxProps) {
  return <StyledBox {...props}>{props.children}</StyledBox>
}
