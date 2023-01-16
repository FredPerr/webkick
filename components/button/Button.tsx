import styled, { useTheme } from 'styled-components'
import { ColorProps, VariantProps } from '@/components'
import SmallArrowSvg from '@/styles/miscs/SmallArrowSvg'
import React from 'react'
import { darken, lighten } from 'polished'

interface ButtonProps extends VariantProps, ColorProps {
  children?: React.ReactNode
  arrow?: boolean
  shadow?: boolean
}

const StyledButton = styled.button<ButtonProps>`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin: 5px;
  font-weight: 600;

  ${({ theme }) => `
    border-radius: ${theme.radius.sm};
    padding: ${theme.spacing.sm} ${theme.spacing.md};
  `}

  ${({ theme, variant, color }) =>
    variant === 'contained' &&
    `
    background-color: ${theme.colors[color]};
    color: ${theme.colors.backgroundPaper};
    box-shadow: 0px 0px 10px ${theme.colors[color]}66;
    &:hover {
      filter: brightness(1.1);
    }
  `}

  ${({ theme, variant, color }) =>
    variant === 'outlined' &&
    `
    background-color: ${lighten(0.8, theme.colors[color])};
    color: ${darken(0.12, theme.colors[color])};
    border: 1.6px solid ${theme.colors[color]};
    box-shadow: 0px 0px 10px ${theme.colors[color]}32;

  `}

  ${({ theme, variant, color }) =>
    variant === 'text' &&
    `
    background-color: transparent;
    color: ${darken(0.12, theme.colors[color])};
    text-shadow: 0px 0px 10px ${theme.colors[color]}32;
  `}
`

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const [hover, setHover] = React.useState(false)
  return (
    <StyledButton
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      variant={props.variant || 'contained'}
      color={props.color || 'primary'}
    >
      {props.children}
      {props.arrow && (
        <SmallArrowSvg
          hover={hover}
          variant={props.variant}
          color={
            props.variant === 'contained' ? 'backgroundPaper' : props.color
          }
        />
      )}
    </StyledButton>
  )
}

export default Button
