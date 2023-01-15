import styled from "styled-components"
import { CssProps } from "@/components"

export interface BoxProps {
    children?: React.ReactNode
}

const Box = styled.div<BoxProps>`
    color: blue;
`

export default Box