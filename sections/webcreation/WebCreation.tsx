import Button from '@/components/button'
import Card from './Card'
import { useTheme } from 'styled-components'
import WebDevSvg from '@/styles/miscs/WebCreationSvg'
import HostingSvg from '@/styles/miscs/HostingSvg'
import MaintenanceSvg from '@/styles/miscs/MaintenanceSvg'
import Blob1Svg from '@/styles/miscs/Blob1Svg'
import FunctionalitySvg from '@/styles/miscs/FunctionalitySvg'
import { useTranslation } from 'next-i18next'

export default function WebCreation() {
  const theme = useTheme()
  const { t } = useTranslation(['common', 'home'])
  return (
    <div
      css={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gridTemplate: '1fr 1fr / 1fr 1fr',
        justifyItems: 'center',
        paddingLeft: '12%',
        paddingRight: '12%',
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      <div>
        <h3
          css={{
            fontSize: theme.fontSizes.xl * 3,
            marginBottom: 50,
            textAlign: 'center',
          }}
        >
          {t('home:solution.title')}
        </h3>
      </div>
      <div css={{ display: 'grid', gridTemplate: '1fr 1fr/1fr 1fr' }}>
        <Card
          title={t('home:solution.web_creation.title')}
          includes={[
            t('home:solution.web_creation.item1'),
            t('home:solution.web_creation.item2'),
            t('home:solution.web_creation.item3'),
            t('home:solution.web_creation.item4'),
            t('home:solution.web_creation.item5'),
            t('home:solution.web_creation.item6'),
          ]}
          icon={<WebDevSvg />}
        />
        <Card
          title={t('home:solution.web_hosting.title')}
          includes={[
            t('home:solution.web_hosting.item1'),
            t('home:solution.web_hosting.item2'),
            t('home:solution.web_hosting.item3'),
            t('home:solution.web_hosting.item4'),
            t('home:solution.web_hosting.item5'),
            t('home:solution.web_hosting.item6'),
          ]}
          icon={<HostingSvg />}
        />
        <Card
          title={t('home:solution.maintenance.title')}
          includes={[
            t('home:solution.maintenance.item1'),
            t('home:solution.maintenance.item2'),
            t('home:solution.maintenance.item3'),
            t('home:solution.maintenance.item4'),
            t('home:solution.maintenance.item5'),
          ]}
          icon={<MaintenanceSvg />}
        />
        <Card
          title={t('home:solution.functionality.title')}
          includes={[
            t('home:solution.functionality.item1'),
            t('home:solution.functionality.item2'),
            t('home:solution.functionality.item3'),
          ]}
          icon={<FunctionalitySvg />}
          addon={
            <div
              css={{
                marginTop: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button variant="outlined" color="primary" arrow>
                {t('home:solution.functionality.cta')}
              </Button>
            </div>
          }
        />
      </div>
      <Blob1Svg />

      <div
        css={{
          marginTop: 10,
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Button variant="contained" color="primary" arrow>
          {t('common:buttons.get_quote')}
        </Button>
        <Button variant="text" color="primary" arrow>
          {t('common:buttons.contact')}
        </Button>
      </div>
    </div>
  )
}
