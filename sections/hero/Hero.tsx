import Box from '@/components/box'
import { useTheme } from 'styled-components'
import HeroBackgroundAnimation from './HeroBackgroundCanvas'

export default function Hero() {
  const theme = useTheme()
  return (
    <Box
      css={{
        height: '100vh',
        backgroundSize: '400% 400%',
        // clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 80%)',
      }}
    >
      <HeroBackgroundAnimation />
    </Box>
  )
}