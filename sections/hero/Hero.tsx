import Box from '@/components/box'
import { useTheme } from 'styled-components'
import HeroBackgroundAnimation from './HeroBackgroundCanvas'
import PhoneMockup from './PhoneMockup'
import ScreenMockup from './ScreenMockup'
import { useTranslation } from 'next-i18next'
import Button from '@/components/button'

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
          marginTop: 70,
        }}
      >
        <Box center css={{ flexDirection: 'column', paddingLeft: '20%' }}>
          <h1
            css={{
              fontSize: theme.fontSizes.xl * 5,
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
            }}
          >
            {t('hero.subtitle')}
          </p>
          <div css={{ display: 'flex' }}>
            <Button variant="contained" color="secondaryDarker" arrow>
              Demander ma soumission
            </Button>
            <Button variant="text" color="primaryDarker" arrow>
              Explorer nos services
            </Button>
          </div>
        </Box>
        <div css={{ position: 'relative' }}>
          <ScreenMockup />
          <PhoneMockup />
        </div>
      </Box>
    </Box>
  )
}
