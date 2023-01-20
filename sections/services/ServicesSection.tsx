import { useTheme } from 'styled-components'
import ServicesAZ from './ServicesAZ'
import Button from '@/components/button'

export default function ServicesSection() {
  const theme = useTheme()
  return (
    <div
      css={{
        display: 'grid',
        backgroundColor: theme.colors.background,
        paddingLeft: '12%',
        paddingRight: '12%',
        width: '100%',
        borderTop: '1px solid #E5E5E5',
        borderBottom: '1px solid #E5E5E5',
        gridTemplate: '1fr / 1fr 1fr',
        [theme.media.smMax]: {
          gridTemplate: 'auto auto / 1fr',
        },
        justifyItems: 'center',
        alignItems: 'center',
        rowGap: '80px',
        columnGap: '80px',
      }}
    >
      <div css={{ textAlign: 'left', margin: '100px 0' }}>
        <h3
          css={{
            fontSize: theme.fontSizes.xl * 2,
            [theme.media.mdMax]: {
              fontSize: theme.fontSizes.md * 1.5,
            },
            lineHeight: '120%',
            textShadow: `0 0 5px ${theme.colors.error}32`,
          }}
        >
          Ne touchez à rien, tout en gardant le contrôle
        </h3>
        <p css={{ fontSize: theme.fontSizes.lg, marginTop: 15 }}>
          Commandez votre site et laissez-nous s'occuper de la création Web,
          l'hébergement et les différents services lié à votre site. Nous
          apportons également les modifications que vous demander et ce sans
          limite!
        </p>
        <div css={{ marginTop: 30 }}>
          <Button variant="text" color="primary" arrow>
            Explorer nos services
          </Button>
        </div>
      </div>
      <div css={{ [theme.media.smMax]: { gridRowStart: 1 } }}>
        <ServicesAZ />
      </div>
    </div>
  )
}
