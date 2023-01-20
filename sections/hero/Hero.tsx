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
  const { t } = useTranslation('home')
  return (
    <Box
      css={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        opacity: 0.99,
        backgroundColor: theme.colors.backgroundPaper,
        backgroundImage: `radial-gradient(#d1d1d1 0.5px, transparent 0.5px), radial-gradient(#d1d1d1 0.5px, ${theme.colors.backgroundPaper} 0.5px)`,
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
          alignItems: 'center',
          paddingBottom: 100,
          marginTop: 100,
        }}
      >
        <Box center css={{ flexDirection: 'column', paddingLeft: '20%' }}>
          <h1
            css={{
              fontSize: theme.fontSizes.lg * 5,
              lineHeight: '100%',
              letterSpacing: -2,
              fontWeight: 700,
              mixBlendMode: 'hard-light',
              color: '#191919',
              marginBottom: 40,
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
              paddingLeft: 20,
            }}
          >
            <Link href="#">
              <Button variant="contained" color="primary" arrow>
                Demander ma soumission
              </Button>
            </Link>
            <Link href="#">
              <Button variant="text" color="primaryLight" arrow>
                Explorer nos services
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
          gridTemplate: 'auto / 1fr 1fr',
          paddingLeft: '12%',
          paddingRight: '12%',
          [theme.media.smMax]: {
            gridTemplate: 'auto auto / 1fr',
          },
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 100,
        }}
      >
        <Box>
          <Box
            css={{
              width: 500,
              height: 350,
              backgroundColor: theme.colors.background,
              boxShadow: '0 40px 50px 12px rgba(0, 0, 0, 0.05)',
              borderRadius: 10,
            }}
          ></Box>
          <p
            css={{
              fontSize: theme.fontSizes.xs,
              marginLeft: 20,
              marginRight: 20,
              width: 500,
              marginTop: 10,
            }}
          >
            En 2020, Statistique Canada révèle que <strong>82%</strong> des
            Canadiens de moins de 65 ans achètent en ligne. Au total plus de{' '}
            <strong>80 milliards</strong> on été dépensé sur le Web au Canada.{' '}
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
            Rejoignez des millions d'acheteurs au pays
          </h3>
          <ul
            css={{
              marginLeft: 20,
              marginTop: 20,
              lineHeight: '40px',
              color: theme.colors.text,
            }}
          >
            <li>Retour sur investissement et taux de conversion élevé</li>
            <li>Affichez votre entreprise et ses produits/services 24/7</li>
            <li>Soyez visible de n'importe où</li>
          </ul>
        </Box>
      </Box>
    </Box>
  )
}
