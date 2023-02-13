import Box from '@/components/box'
import { useTheme } from 'styled-components'
import HeroBackgroundAnimation from './HeroBackgroundCanvas'
import PhoneMockup from './PhoneMockup'
import ScreenMockup from './ScreenMockup'
import { useTranslation } from 'next-i18next'
import Button from '@/components/button'
import Link from 'next/link'
import Navbar from '@/components/navbar/Navbar'

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
      <Navbar />
      <HeroBackgroundAnimation />
      <Box
        css={{
          zIndex: 1,
          display: 'grid',
          gridTemplate: '650px / 60% 40%',
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
        <div css={{ position: 'relative', marginTop: '5rem' }}>
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
          >
            <svg
              viewBox="0 0 1000 500"
              xmlns="http://www.w3.org/2000/svg"
              css={{ marginRight: 10 }}
            >
              <path
                d="  M0,500  h50  v--1.0289661900545752  q0,-7 -7,-7  h-36  q-7,0 -7,7  Z"
                fill={theme.colors.primary}
              />
              <path
                d="  M62.5,500  h50  v-18.093383865343526  q0,-7 -7,-7  h-36  q-7,0 -7,7  Z"
                fill={theme.colors.primary}
              />
              <path
                d="  M125,500  h50  v-33.689588486236744  q0,-7 -7,-7  h-36  q-7,0 -7,7  Z"
                fill={theme.colors.primary}
              />
              <path
                d="  M187.5,500  h50  v-54.82861481749677  q0,-7 -7,-7  h-36  q-7,0 -7,7  Z"
                fill={theme.colors.primary}
              />
              <path
                d="  M250,500  h50  v-76.4183167291369  q0,-7 -7,-7  h-36  q-7,0 -7,7  Z"
                fill={theme.colors.primary}
              />
              <path
                d="  M312.5,500  h50  v-97.3231364286936  q0,-7 -7,-7  h-36  q-7,0 -7,7  Z"
                fill={theme.colors.primary}
              />
              <path
                d="  M375,500  h50  v-121.70622585669491  q0,-7 -7,-7  h-36  q-7,0 -7,7  Z"
                fill={theme.colors.primary}
              />
              <path
                d="  M437.5,500  h50  v-185.05537921531788  q0,-7 -7,-7  h-36  q-7,0 -7,7  Z"
                fill={theme.colors.primary}
              />
              <path
                d="  M500,500  h50  v-164.83469031215407  q0,-7 -7,-7  h-36  q-7,0 -7,7  Z"
                fill={theme.colors.primary}
              />
              <path
                d="  M562.5,500  h50  v-256.2796692186359  q0,-7 -7,-7  h-36  q-7,0 -7,7  Z"
                fill={theme.colors.primary}
              />
              <path
                d="  M625,500  h50  v-161.82747707328167  q0,-7 -7,-7  h-36  q-7,0 -7,7  Z"
                fill={theme.colors.primary}
              />
              <path
                d="  M687.5,500  h50  v-193.98209923311958  q0,-7 -7,-7  h-36  q-7,0 -7,7  Z"
                fill={theme.colors.primary}
              />
              <path
                d="  M750,500  h50  v-235.02494922743392  q0,-7 -7,-7  h-36  q-7,0 -7,7  Z"
                fill={theme.colors.primary}
              />
              <path
                d="  M812.5,500  h50  v-218.8120680929319  q0,-7 -7,-7  h-36  q-7,0 -7,7  Z"
                fill={theme.colors.primary}
              />
              <path
                d="  M875,500  h50  v-329.2265470709448  q0,-7 -7,-7  h-36  q-7,0 -7,7  Z"
                fill={theme.colors.primary}
              />
              <path
                d="  M937.5,500  h50  v-478.16074885370244  q0,-7 -7,-7  h-36  q-7,0 -7,7  Z"
                fill={theme.colors.primary}
              />
            </svg>
          </Box>
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
