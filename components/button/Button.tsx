import React from 'react'
import styled, { css } from 'styled-components'
import theme from '@/styles/theme'
import {
  HoverComponentProps,
  StyledComponentProps,
  VariantComponentProps,
} from '@/components'

interface ButtonProps
  extends StyledComponentProps,
    VariantComponentProps,
    HoverComponentProps {
  children: React.ReactNode
  variant: 'text' | 'outlined' | 'contained'
  href?: string
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  height: 40px;
  color: white;
  text-transform: uppercase;
  font-size: 0.9rem;
  padding: 0 20px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  margin: 0 5px;

  ${(props) =>
    props.variant === 'contained' &&
    css`
      font-weight: 500;
      background-color: ${theme.colors[props.color]};
      box-shadow: 0px 10px 15px -3px ${theme.colors[props.hoverBgColor]}32;
      &:hover {
        background-color: ${theme.colors[props.hoverBgColor]};
        transform: translateY(-1px);
      }
    `}
  ${(props) =>
    props.variant === 'text' &&
    css`
      background-color: transparent;
      color: ${theme.colors[props.color]};
      text-transform: none;
      text-shadow: 0px 0px 5px ${theme.colors[props.hoverBgColor]}32;
      &:hover {
        color: ${theme.colors[props.hoverFgColor]};
      }
    `}
    ${(props) =>
    props.variant === 'outlined' &&
    css`
      border: 1.5px solid ${theme.colors[props.hoverBgColor]}};
      background-color: transparent;
      color: ${theme.colors[props.color]};
      text-transform: none;
      text-shadow: 0px 0px 5px ${theme.colors[props.hoverBgColor]}32;
      &:hover {
        border-color: ${theme.colors[props.hoverBgColor]}};
        background-color: ${theme.colors[props.hoverBgColor]}0A;
      }
    `}
    ${(props) => props.css && props.css}
`

export default function Button(props: ButtonProps) {
  return (
    <StyledButton
      {...props}
      onMouseDown={(e) => {
        if (props.variant != 'text') e.currentTarget.style.scale = '0.97'
      }}
      onMouseUp={(e) => {
        if (props.variant != 'text') e.currentTarget.style.scale = '1'
      }}
    >
      {props.children}
    </StyledButton>
  )
}

Button.defaultProps = {
  color: 'primary',
  variant: 'contained',
  hoverBgColor: 'primaryLight',
  hoverFgColor: 'white',
}
