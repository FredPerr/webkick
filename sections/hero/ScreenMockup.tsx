import { useTheme } from 'styled-components'

export default function ScreenMockup() {
  const theme = useTheme()
  return (
    <div
      css={{
        [theme.media.xs]: {
          display: 'none',
        },
        background:
          'linear-gradient(hsla(0,0%,100%,.4),hsla(0,0%,100%,.3) 25%,rgba(246,249,252,.3) 50%,#f6f9fc 60%)',
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
