import styled from 'styled-components'
import { ColorProps, VariantProps } from '@/components'

interface ButtonProps extends VariantProps, ColorProps {
  children?: React.ReactNode
}

const StyledButton = styled.button``

export default function Button() {}
