import { Text } from '@nextui-org/react'
import Box from '../box'
import HeroImage from './HeroImage'

export default function Hero() {
    return (
        <Box
            css={{
                h: '100vh',
                w: '100vw',
                backgroundImage:
                    'radial-gradient(#4d4e50 0.45px, transparent 0.45px), radial-gradient(#4d4e50 0.45px, #262626 0.45px)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 10px 10px',
                // background: 'radial-gradient(22.71% 28.86% at 73.99% 40.17%, rgba(255, 108, 1, 0.09) 0%, rgba(255, 108, 1, 0) 100%), radial-gradient(19.26% 56.07% at 71.84% 40.17%, rgba(142, 39, 159, 0.207) 0%, rgba(226, 14, 14, 0) 100%), radial-gradient(32.09% 43.78% at 72.01% 46.78%, rgba(110, 167, 38, 0.2) 0%, rgba(142, 31, 182, 0) 100%)'
            }}
        >
            <Box
                css={{
                    h: 'calc(100% - 76px)',
                    d: 'grid',
                    gridTemplate: '100% / 1fr 1fr',
                    pt: '76px',
                    px: '5%',
                    ai: 'center',
                    ta: 'center',
                    '@smMax': {
                        gridTemplate: '1fr 1fr / 100%',
                    },
                }}
            >
                <Box css={{ p: 20, as: 'start' }}>
                    <Text h1 css={{ fs: '$4xl', ta: 'left', lh: '110%' }}>
                        Générez plus de prospects en vous positionant sur le
                        Web!
                    </Text>
                </Box>
                <Box>
                    <HeroImage />
                </Box>
            </Box>
        </Box>
    )
}
