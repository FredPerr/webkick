import React from 'react'
import { useTheme } from 'styled-components'
import { ColorType } from '../theme'
import { VariantProps, VariantType } from '@/components'
import { darken } from 'polished'

const SmallArrowSvg = ({
  hover,
  color,
  variant,
}: {
  hover?: boolean
  color: ColorType
  variant: VariantType
}) => {
  const theme = useTheme()
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 10"
      aria-hidden="true"
      fill="none"
      css={{
        transition: '150ms cubic-bezier(0.215,0.61,0.355,1)',
        transform: hover ? 'translateX(3px)' : 'translateX(0)',
        marginLeft: 3,
      }}
    >
      <g
        fillRule="evenodd"
        stroke={
          variant === 'contained'
            ? theme.colors[color]
            : darken(0.12, theme.colors[color])
        }
      >
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.3"
          css={{
            opacity: hover ? '1' : '0',
            transition: '150ms cubic-bezier(0.215,0.61,0.355,1)',
          }}
          d="M0 5h7"
        ></path>
        <path
          fill="none"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.3"
          d="M4 1l4 4-4 4"
        ></path>
      </g>
    </svg>
  )
}

export default SmallArrowSvg
