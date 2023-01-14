import styled from 'styled-components'
import DrawerToggleButton from './DrawerToggle'
import { useTranslation } from 'next-i18next'
import Button from '@/components/button'
import COPY from '@/constants/copy'

interface NavbarProps {}

export function NavbarBase(props: NavbarProps) {
  const { t } = useTranslation('common')
  return (
    <div {...props}>
      <DrawerToggleButton />
      <div>test</div>
      <div>
        <Button variant="contained" color="primary">
          {t('buttons.get_quote', COPY.buttons.get_quote)}
        </Button>
      </div>
    </div>
  )
}

export default styled(NavbarBase)`
  width: 100%;
  padding: 12px 5%;
  display: grid;
  align-items: center;
  justify-content: space-between;

  grid-template: 35px / auto auto auto;
`
