import Box from '@/components/box'
import { useTheme } from 'styled-components'
import HeroBackgroundAnimation from './HeroBackgroundCanvas'

export default function Hero() {
  const theme = useTheme()
  return (
    <Box
      css={{
        height: 600,
        [theme.media.mdMin]: {
          height: 600,
        },
        [theme.media.mdMax]: {
          height: 800,
        },
        width: '100%',
        display: 'grid',
        gridTemplate: '100% / 50% 50%',
      }}
    >
      <HeroBackgroundAnimation />
    </Box>
  )
}
