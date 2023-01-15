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

interface NavbarProps {}

const StyledNavbar = styled(Box)`
  width: 100%;
  padding: 0 2%;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template: 1fr / auto auto auto;
`

export default function Navbar(props: NavbarProps) {
  const { t } = useTranslation('common')
  return (
    <StyledNavbar {...props}>
      <DrawerToggleButton css={{ [media.sm]: { display: 'none' } }} />
      <Link href="/">
        <Logo size={29} text css={{ marginRight: 20 }} />
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
