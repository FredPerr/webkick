import theme from '@/styles/theme'
import Link, { LinkProps } from 'next/link'
import styled from 'styled-components'

interface NavbarLinkProps extends LinkProps {
  text: string
}

export function NavbarLink(props: NavbarLinkProps) {
  return <Link {...props}>{props.text}</Link>
}

export default styled(NavbarLink)`
  color: ${theme.colors.textLight};
  font-weight: 500;
  margin: 0 15px;
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  text-shadow: 0 0 6px ${theme.colors.text}20;
  &:hover {
    color: ${theme.colors.textLighter};
  }
`
