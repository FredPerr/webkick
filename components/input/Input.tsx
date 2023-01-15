import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { SucessIcon, ErrorIcon } from './InputStateIcon'
import { StyledComponentProps, VariantComponentProps } from '@/components'
import Colors from '@/styles/theme/colors'

interface InputProps
  extends StyledComponentProps,
    VariantComponentProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color'> {
  variant: 'underline' | 'outlined' | 'contained'
  fullWidth?: boolean
  state: 'error' | 'success' | 'empty'
  note?: string
}

const StyledInput = styled.input<InputProps>`
  outline: none;
  padding: 10px 15px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  color: ${(props) => props.theme.colors.textDark};

  ${(props) =>
    props.variant === 'contained' &&
    css`
      border: 1px solid
        ${props.state === 'error' ? props.theme.colors.error : 'white'};
      background-color: ${props.theme.colors.gray200};
    `}
  ${(props) =>
    props.variant === 'outlined' &&
    css`
      border: 1px solid
        ${props.state === 'error'
          ? props.theme.colors.error
          : props.theme.colors.textLighter};
      &:focus {
        border: 1px solid ${props.theme.colors[props.color + 'Light']};
      }
    `}
    ${(props) =>
    props.variant === 'underline' &&
    css`
      border-radius: 0;
      border: none;
      border-bottom: 1.5px solid
        ${props.state === 'error'
          ? props.theme.colors.error
          : props.theme.colors.textLighter};
      &:focus {
        border-bottom: 1.5px solid ${props.theme.colors.text};
      }
    `};
`

const Input = forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: props.fullWidth ? '100%' : 'fit-content',
        margin: 8,
      }}
    >
      <span
        style={{
          position: 'absolute',
          textAlign: 'justify',
          marginRight: 8,
          left: 8,
          top: '100%',
          fontSize: 10,
          color:
            props.state === 'error'
              ? Colors.error
              : props.state === 'success'
              ? 'transparent'
              : Colors.textLight,
        }}
      >
        {props.note}
      </span>
      <div
        style={{
          position: 'absolute',
          left: '100%',
          top: '50%',
          height: '16px',
          transform: 'translateY(-50%)',
          marginLeft: 5,
        }}
      >
        {props.state === 'success' ? (
          <SucessIcon />
        ) : props.state === 'error' ? (
          <ErrorIcon />
        ) : (
          <></>
        )}
      </div>
      <StyledInput ref={ref} {...props} />
    </div>
  ),
)
Input.displayName = 'Input'

export default Input
