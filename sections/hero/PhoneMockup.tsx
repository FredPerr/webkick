import Box from '@/components/box'
import { useTheme } from 'styled-components'

export default function PhoneMockup(props: { children?: React.ReactNode }) {
  const theme = useTheme()
  return (
    <Box
      center
      css={{
        [theme.media.xs]: {
          display: 'none',
        },
        backgroundColor: '#f2f5f9',
        boxShadow:
          '0 40px 50px 12px rgba(0, 0, 0, 0.11), inset 0 0 5px 2px #d5d4d8',
        width: 260,
        height: 500,
        borderRadius: 40,
        position: 'absolute',
        top: '40%',
        left: '15%',
        transform: 'translateY(-50%)',
      }}
    >
      <Box
        css={{
          backgroundColor: 'white',
          width: 'calc(100% - 15px)',
          height: 'calc(100% - 12px)',
          borderRadius: 40,
        }}
      >
        {props.children}
      </Box>
    </Box>
  )
}
