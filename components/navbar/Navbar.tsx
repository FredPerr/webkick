import styled from 'styled-components'
import DrawerToggleButton from './DrawerToggle'
import { useTranslation } from 'next-i18next'
import Button from '@/components/button'
import COPY from '@/constants/copy'
import NavbarLink from './NavbarLink'
import Logo from '@/components/logo'
import LangLink from './LangLink'
import Box from '@/components/box'
import Link from 'next/link'
import media from '@/styles/theme/media'
import Colors from '@/styles/theme/colors'
import useScrollPosition from '@/hooks/useScrollPosition'

interface NavbarProps {}

const StyledNavbar = styled(Box)`
  position: fixed;
  width: 100%;
  padding: 0 2%;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template: 1fr / auto auto auto;
  ${(props) => props.css}
`

export default function Navbar(props: NavbarProps) {
  const { t } = useTranslation('common')
  const scrollPosition = useScrollPosition()
  return (
    <StyledNavbar
      {...props}
      css={{
        backgroundColor:
          scrollPosition > 50 ? Colors.background : 'transparent',
      }}
    >
      <DrawerToggleButton css={{ [media.sm]: { display: 'none' } }} />
      <Link href="/">
        <Logo size={23} text css={{ marginRight: 20 }} />
      </Link>
      <Box css={{ [media.mdMax]: { display: 'none' } }}>
        <nav>
          <NavbarLink
            href="/#solutions"
            text={t('navbar.solutions', COPY.navbar.solutions)}
          />
          <NavbarLink
            href="/pricing"
            text={t('navbar.pricing', COPY.navbar.pricing)}
          />
          <NavbarLink href="/blog" text={t('navbar.blog', COPY.navbar.blog)} />
          <NavbarLink
            href="/about"
            text={t('navbar.about', COPY.navbar.about)}
          />
        </nav>
      </Box>
      <Box
        css={{
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'center',
          [media.smMax]: { display: 'none' },
          '& button': { fontSize: '0.8rem' },
        }}
      >
        <Button variant="outlined" color="primary" css={{ fontWeight: 500 }}>
          {t('buttons.contact', COPY.buttons.contact)}
        </Button>
        <Button variant="contained" color="primary">
          {t('buttons.get_quote', COPY.buttons.get_quote)}
        </Button>
        <LangLink />
      </Box>
    </StyledNavbar>
  )
}
