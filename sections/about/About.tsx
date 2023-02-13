import { useTranslation } from 'next-i18next'
import { useTheme } from 'styled-components'

export default function About() {
  const theme = useTheme()
  const { t } = useTranslation('home')
  return (
    <div
      id="about"
      css={{
        backgroundColor: theme.colors.backgroundPaperDark,
        color: theme.colors.background,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: '15%',
        paddingRight: '15%',
        paddingTop: '4rem',
        paddingBottom: '4rem',
        textAlign: 'center',
        opacity: 0.8,
        backgroundImage:
          'radial-gradient(#4e4e4e 0.5px, transparent 0.5px), radial-gradient(#4e4e4e 0.5px, #000912 0.5px)',
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0,10px 10px',
      }}
    >
      <h3 css={{ fontSize: theme.fontSizes.lg * 2 }}>
        {t('home:about.title')}
      </h3>
      <p
        css={{ fontSize: 18, marginTop: 10 }}
        dangerouslySetInnerHTML={{
          __html: t('home:about.description', { __: '<u>', ___: '</u>' }),
        }}
      ></p>
    </div>
  )
}
