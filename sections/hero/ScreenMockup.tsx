import { useTheme } from 'styled-components'

export default function ScreenMockup() {
  const theme = useTheme()
  return (
    <div
      css={{
        [theme.media.xs]: {
          display: 'none',
        },
        background: `url(${'/images/laptop.jpg'}) no-repeat center center`,
        backgroundSize: 'cover',
        width: 800,
        height: 500,
        borderRadius: 10,
        overflow: 'hidden',
        top: '32%',
        position: 'absolute',
        left: '40%',
        transform: 'translateY(-50%)',
        boxShadow: '0 40px 50px 12px rgba(0, 0, 0, 0.11)',
      }}
    ></div>
  )
}
