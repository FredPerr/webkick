import Box from '@/components/box'
import HostingSvg from '@/styles/miscs/HostingSvg'
import WebCreationSvg from '@/styles/miscs/WebCreationSvg'
import { useTheme } from 'styled-components'
import MaintenanceSvg from '@/styles/miscs/MaintenanceSvg'

export default function ServicesAZ() {
  const theme = useTheme()
  return (
    <div
      css={{
        display: 'grid',
        gridTemplate: '1fr 1fr / 1fr 1fr',
        width: 400,
        height: 400,
        [theme.media.mdMax]: {
          width: 250,
          height: 250,
        },
        justifyItems: 'center',
        alignItems: 'center',
        gap: '50px',
        '& svg': { width: 75, height: 75 },
        borderRadius: '50%',
        border: '1px dashed #efefef',
      }}
    >
      <ServiceBox icon={<WebCreationSvg />} title="Création Web" />
      <ServiceBox icon={<HostingSvg />} title="Hébergement Web" />
      <div css={{ gridColumnStart: 1, gridColumnEnd: 3, alignSelf: 'end' }}>
        <ServiceBox icon={<MaintenanceSvg />} title="Maintenance illimitée" />
      </div>
    </div>
  )
}

function ServiceBox({ icon, title }: { icon: React.ReactNode; title: string }) {
  const theme = useTheme()
  return (
    <Box
      css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {icon}
      <h3 css={{ fontSize: 14, fontWeight: 500, color: theme.colors.textDark }}>
        {title}
      </h3>
    </Box>
  )
}
