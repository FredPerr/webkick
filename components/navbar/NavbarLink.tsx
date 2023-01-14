import theme from '@/styles/themes/default'
import Link from 'next/link'
import styled from 'styled-components'

interface NavbarLinkProps {
  href: string
  text: string
}

export function NavbarLink(props: NavbarLinkProps) {
  return <Link {...props}>{props.text}</Link>
}

export default styled(NavbarLink)`
  color: ${theme.colors.text};
  font-weight: 500;
  margin: 0 10px;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  text-shadow: 0 0 6px ${theme.colors.text}20;
  &:hover {
    color: ${theme.colors.textLight};
  }
`