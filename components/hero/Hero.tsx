import { Text, useTheme } from '@nextui-org/react'
import Box from '../box'
import HeroImage from './HeroImage'
import { LogoTextAnimated } from '../logo'
import { Button } from '../button'
import NextLink from 'next/link'
import DottedLine from '../shapes/DottedLine'

export default function Hero() {
    const theme = useTheme()

    return (
        <Box
            css={{
                position: 'relative',
                h: '100vh',
                w: '100vw',
                backgroundImage:
                    'radial-gradient(#4d4e50 0.45px, transparent 0.45px), radial-gradient(#4d4e50 0.45px, #262626 0.45px)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 10px 10px',
                '@smMax': {
                    h: '200vh',
                },
            }}
        >
            <Box
                css={{
                    position: 'absolute',
                    bottom: -2,
                    h: 2,
                    w: '100%',
                    bgColor: '$primary',
                    opacity: 0.3,
                }}
            ></Box>

            <Box
                css={{
                    position: 'absolute',
                    top: '20%',
                    bgColor: '$primary',
                    w: '23px',
                    h: '120px',
                    boxShadow: `0px 0px 30px 0px ${theme.theme.colors.primary.value}32`,
                }}
            ></Box>
            <Box
                css={{
                    dflex: 'center',
                    fd: 'column',
                    position: 'absolute',
                    bottom: '20%',
                    right: 0,
                    bgColor: '$primary',
                    w: '39px',
                    h: '80px',
                    boxShadow: `0px 0px 30px 0px ${theme.theme.colors.primary.value}32`,
                    '& .nextui-text': { color: 'white' },
                }}
            >
                <NextLink href="/#" locale="fr">
                    <Text>FR</Text>
                </NextLink>
                <NextLink href="/#" locale="en">
                    <Text>EN</Text>
                </NextLink>
            </Box>
            <Box
                css={{
                    h: 'calc(100% - 76px)',
                    d: 'grid',
                    gridTemplate: '100% / 50% 50%',
                    pt: '76px',
                    px: '5%',
                    ai: 'center',
                    ta: 'center',
                    // background:
                    // 'radial-gradient(19.26% 56.07% at 75% 75%, rgba(142, 39, 159, 0.1) 0%, rgba(226, 14, 14, 0) 100%), radial-gradient(32.09% 43.78% at 72.01% 46.78%, rgba(220, 132, 235, 0.03) 0%, rgba(142, 31, 182, 0) 100%)',
                    '@smMax': {
                        gridTemplate: '1fr / 100%',
                    },
                }}
            >
                <Box css={{ p: 20, as: 'start', ta: 'left' }}>
                    <Box css={{ mb: 15 }}>
                        <LogoTextAnimated size={35} />
                    </Box>
                    <Box css={{ d: 'flex', ai: 'center', mb: 25 }}>
                        <hr
                            style={{
                                display: 'block',
                                width: '40px',
                                borderTop: '1.5px solid white',
                                marginRight: 8,
                            }}
                        />
                        <Text h2 css={{ fs: '$xl', fontWeight: 400, mb: 0 }}>
                            Création de sites Web
                        </Text>
                    </Box>
                    <Text h1 css={{ fs: '$4xl', lh: '120%' }}>
                        Générez plus de prospects en vous positionant sur le
                        Web!
                    </Text>
                    <Text css={{ fs: '$md', color: '$gray900', my: 30 }}>
                        Parce que vos clients se tournent de plus en plus vers
                        le Web pour trouver ce qu’ils veulent, il est judicieux
                        de se mettre au premier plan sur le Web pour maximiser
                        ses revenues.
                    </Text>
                    <Box css={{ d: 'flex', ai: 'center', mb: 30 }}>
                        <Box
                            css={{
                                d: 'flex',
                                ai: 'center',
                                bgColor: 'red',
                                w: '20px',
                                h: '20px',
                                br: '50%',
                                dflex: 'center',
                                mr: '10px',
                            }}
                        >
                            <Text css={{ fs: '18px', fontWeight: 800 }}>!</Text>
                        </Box>
                        <Text>
                            Obtenez votre soumission en 24H-48H et payez en 12
                            mois à 0%!
                        </Text>
                    </Box>
                    <Box css={{ '& .nextui-button': { my: 20 } }}>
                        <NextLink href="/#soumission">
                            <Button auto>Obtenir ma soumission</Button>
                        </NextLink>
                        <NextLink href="/#avantages">
                            <Button auto>En savoir plus</Button>
                        </NextLink>
                    </Box>
                </Box>
                <Box
                    css={{
                        d: 'flex',
                        jc: 'center',
                        h: '100%',
                        filter: 'drop-shadow(0px 0px 30px rgba(200,200,255,0.1))',
                    }}
                >
                    <HeroImage />
                </Box>
            </Box>
        </Box>
    )
}
