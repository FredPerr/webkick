import React from 'react'
import styled, { css } from 'styled-components'
import theme from '@/styles/themes/default'

interface ButtonProps {
  children: React.ReactNode
  color: 'primary' | 'secondary' | 'text'
  variant: 'text' | 'outlined' | 'contained'
  href?: string
}

export function ButtonBase(props: ButtonProps) {
  return (
    <button
      {...props}
      onMouseDown={(e) => {
        if (props.variant != 'text') e.currentTarget.style.scale = '0.97'
      }}
      onMouseUp={(e) => {
        if (props.variant != 'text') e.currentTarget.style.scale = '1'
      }}
    >
      {props.children}
    </button>
  )
}

const StyledButton = styled(ButtonBase)`
  border: none;
  cursor: pointer;
  height: 40px;
  color: white;
  text-transform: uppercase;
  padding: 0 20px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  margin: 0 5px;

  ${(props) =>
    props.variant === 'contained' &&
    css`
      font-weight: 500;
      background-color: ${theme.colors[props.color]};
      box-shadow: 0px 10px 15px -3px ${theme.colors[`${props.color}Light`]}32;
      &:hover {
        background-color: ${theme.colors[`${props.color}Light`]};
        transform: translateY(-1px);
      }
    `}
  ${(props) =>
    props.variant === 'text' &&
    css`
      background-color: transparent;
      color: ${theme.colors[props.color]};
      text-transform: none;
      text-shadow: 0px 0px 5px ${theme.colors[`${props.color}Light`]}32;
      &:hover {
        color: ${theme.colors[`${props.color}Light`]};
      }
    `}
    ${(props) =>
    props.variant === 'outlined' &&
    css`
      border: 1.5px solid ${theme.colors[`${props.color}Light`]}};
      background-color: transparent;
      color: ${theme.colors[props.color]};
      text-transform: none;
      text-shadow: 0px 0px 5px ${theme.colors[`${props.color}Light`]}32;
      &:hover {
        border-color: ${theme.colors[`${props.color}Light`]}};
        background-color: ${theme.colors[`${props.color}Light`]}0A;
      }
    `}
`

StyledButton.defaultProps = {
  color: 'primary',
  variant: 'contained',
}

export default StyledButton
