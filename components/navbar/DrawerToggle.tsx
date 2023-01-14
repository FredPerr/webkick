import styled from 'styled-components'
import theme from '@/styles/themes/default'

interface DrawerToggleButtonProps {
  size: number
  onClick: () => void
}

export function DrawerToggleButtonBase(props: DrawerToggleButtonProps) {
  return (
    <button type="button" {...props}>
      <svg viewBox="0 0 24 24" width={props.size} height={props.size}>
        <g>
          <path
            d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
            stroke={theme.colors.textLight}
            strokeWidth="1.75"
          />
        </g>
      </svg>
    </button>
  )
}

DrawerToggleButtonBase.defaultProps = {
  onClick: () => {},
  size: 24,
}

export default styled(DrawerToggleButtonBase)`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
`
