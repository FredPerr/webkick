import Box from '@/components/box'
import { useTheme } from 'styled-components'
import HeroBackgroundAnimation from './HeroBackgroundCanvas'
import PhoneMockup from './PhoneMockup'
import ScreenMockup from './ScreenMockup'
import { useTranslation } from 'next-i18next'
import Button from '@/components/button'
import Link from 'next/link'

export default function Hero() {
  const theme = useTheme()
  const { t } = useTranslation(['home', 'common'])
  return (
    <Box
      css={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        opacity: 0.99,
        backgroundColor: theme.colors.backgroundPaper,
        backgroundImage: `radial-gradient(#efefef  1px, transparent 1px), radial-gradient(#efefef  1px, ${theme.colors.backgroundPaper} 1px)`,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0,10px 10px',
      }}
    >
      <HeroBackgroundAnimation />
      <Box
        css={{
          zIndex: 1,
          display: 'grid',
          gridTemplate: '600px / 60% 40%',
          [theme.media.smMax]: {
            gridTemplate: 'auto auto / 100%',
          },
          paddingBottom: 100,
          marginTop: 100,
          [theme.media.lg]: {
            marginTop: 100,
          },
          [theme.media.md]: {
            marginTop: 200,
            gridTemplate: '500px / 60% 40%',
          },
          [theme.media.sm]: {
            marginTop: 220,
            gridTemplate: '500px / 60% 40%',
          },
          [theme.media.xs]: {
            marginTop: 120,
          },
        }}
      >
        <Box
          center
          css={{
            flexDirection: 'column',
            paddingLeft: '20%',
            [theme.media.xs]: { paddingLeft: '5%', paddingRight: '5%' },
          }}
        >
          <h1
            css={{
              fontSize: theme.fontSizes.lg * 5,
              lineHeight: '100%',
              letterSpacing: -2,
              fontWeight: 700,
              mixBlendMode: 'hard-light',
              color: '#191919',
              marginBottom: 40,
              [theme.media.lg]: {
                fontSize: theme.fontSizes.md * 4.5,
              },
              [theme.media.md]: {
                fontSize: theme.fontSizes.md * 4,
              },
              [theme.media.sm]: {
                fontSize: theme.fontSizes.md * 3.5,
              },
              [theme.media.xs]: {
                fontSize: theme.fontSizes.md * 3,
                marginLeft: 30,
              },
            }}
          >
            {t('hero.title')}
          </h1>
          <p
            css={{
              maxWidth: '60%',
              marginRight: 'auto',
              fontWeight: 500,
              color: theme.colors.text,
              borderLeft: `1px dotted ${theme.colors.gray900}`,
              paddingLeft: 20,
              marginLeft: 30,
              fontSize: theme.fontSizes.md,
              [theme.media.smMax]: { fontSize: theme.fontSizes.sm },
            }}
          >
            {t('hero.subtitle')}
          </p>
          <div
            css={{
              display: 'flex',
              width: '100%',
              textAlign: 'left',
              marginTop: 20,
              marginLeft: 50,
              [theme.media.xs]: {
                marginLeft: 15,
              },
              paddingLeft: 20,
            }}
          >
            <Link href="#">
              <Button variant="contained" color="primary" arrow>
                {t('common:buttons.get_quote')}
              </Button>
            </Link>
            <Link href="#">
              <Button variant="text" color="primaryLight" arrow>
                {t('common:buttons.explore_services')}
              </Button>
            </Link>
          </div>
          <p
            css={{
              fontSize: theme.fontSizes.md,
              textAlign: 'left',
              color: theme.colors.error,
              fontWeight: 500,
              marginLeft: 50,
              alignSelf: 'start',
              marginTop: 20,
              [theme.media.xs]: {
                fontSize: theme.fontSizes.xs,
              },
            }}
          >
            <sup>*</sup>
            {t('hero.note')}
          </p>
        </Box>
        <div css={{ position: 'relative' }}>
          <ScreenMockup />
          <PhoneMockup />
        </div>
      </Box>
      <Box
        css={{
          display: 'grid',
          rowGap: 50,
          gridTemplate: 'auto / 1fr 1fr',
          marginLeft: '12%',
          marginRight: '12%',
          [theme.media.mdMax]: {
            gridTemplate: 'auto auto / 1fr',
            marginLeft: '5%',
            marginRight: '5%',
            marginTop: 100,
          },
          justifyItems: 'center',
          alignItems: 'center',
          marginBottom: 100,
        }}
      >
        <Box>
          <Box
            css={{
              display: 'grid',
              width: 500,
              height: 350,
              backgroundColor: theme.colors.background,
              justifyItems: 'center',
              alignItems: 'center',
              boxShadow: '0 40px 50px 12px rgba(0, 0, 0, 0.15)',
              borderRadius: 10,
              [theme.media.smMax]: {
                marginLeft: 'auto',
                marginRight: 'auto',
                width: 400,
                height: 150,
              },
              [theme.media.xs]: {
                marginLeft: 'auto',
                marginRight: 'auto',
                width: 300,
                height: 150,
              },
            }}
          ></Box>
          <p
            css={{
              fontSize: theme.fontSizes.xs,
              marginLeft: 20,
              marginRight: 20,
              width: 500,
              [theme.media.smMax]: {
                width: 400,
                marginLeft: 'auto',
                marginRight: 'auto',
              },

              [theme.media.xs]: {
                width: 300,
                marginLeft: 'auto',
                marginRight: 'auto',
              },
              marginTop: 10,
            }}
          >
            {t('hero.statistic')}
          </p>
        </Box>
        <Box>
          <h3
            css={{
              fontSize: theme.fontSizes.md * 1.5,
              fontWeight: 700,
              color: theme.colors.textDark,
            }}
          >
            {t('home:hero.list_title')}
          </h3>
          <ul
            css={{
              marginLeft: 20,
              marginTop: 20,
              lineHeight: '40px',
              color: theme.colors.text,
              fontSize: 15,
            }}
          >
            <li>{t('home:hero.list_point_1')}</li>
            <li>{t('home:hero.list_point_2')}</li>
            <li>{t('home:hero.list_point_3')}</li>
          </ul>
          <Button variant="text" arrow color="primaryLight">
            {t('common:buttons.explore_services')}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
