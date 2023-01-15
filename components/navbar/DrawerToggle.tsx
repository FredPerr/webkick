import styled from 'styled-components'
import theme from '@/styles/theme'
import { StyledComponentProps } from '@/components'

interface DrawerToggleButtonProps
  extends StyledComponentProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: number
}

const StyledDrawerToggleButton = styled.button<DrawerToggleButtonProps>`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  width: fit-content;
  ${(props) => props.css}
`

export default function DrawerToggleButton(props: DrawerToggleButtonProps) {
  return (
    <StyledDrawerToggleButton type="button" {...props}>
      <svg viewBox="0 0 24 24" width={props.size} height={props.size}>
        <g>
          <path
            d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
            stroke={theme.colors.textLight}
            strokeWidth="2"
          />
        </g>
      </svg>
    </StyledDrawerToggleButton>
  )
}

DrawerToggleButton.defaultProps = {
  onClick: () => {},
  size: 24,
}
