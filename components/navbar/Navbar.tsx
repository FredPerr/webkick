import styled from 'styled-components'
import DrawerToggleButton from './DrawerToggle'
import { useTranslation } from 'next-i18next'
import Button from '@/components/button'
import COPY from '@/constants/copy'
import NavbarLink from './NavbarLink'
import Logo from '@/components/logo'
import { useRouter } from 'next/router'
import LangLink from './LangLink'

interface NavbarProps {}

export function NavbarBase(props: NavbarProps) {
  const { t } = useTranslation('common')
  const { locale } = useRouter()
  return (
    <div {...props}>
      <Logo size={30} text />
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
          text={t('navbar.solutions', COPY.navbar.about)}
        />
      </nav>
      <div>
        <Button variant="outlined" color="primary">
          {t('buttons.contact', COPY.buttons.contact)}
        </Button>
        <Button variant="contained" color="primary">
          {t('buttons.get_quote', COPY.buttons.get_quote)}
        </Button>
        <LangLink />
      </div>
      <DrawerToggleButton />
    </div>
  )
}

export default styled(NavbarBase)`
  width: 100%;
  padding: 0 5%;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template: 35px / auto auto auto;
`
