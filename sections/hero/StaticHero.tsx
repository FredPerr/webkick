import Box from '@/components/box'
import website from '@/constants/website'
import { Button, Image, Link } from '@nextui-org/react'
import Text from './Text'
import { navbar } from '@/constants/routing'

export default function StaticHero() {
    return (
        <Box
            id="hero"
            css={{
                d: 'flex',
                flex: '1 1 auto',
                h: 'calc(100vh - 76px)',
                mh: 'calc(100vh - 76px)',
                dflex: 'center',
                fd: 'column',
                position: 'relative',
                bgColor: 'black',
            }}
        >
            <Image
                src={website.hero.static_image}
                objectFit="cover"
                alt="hero background"
                css={{
                    minHeight: '100vh',
                    minWidth: '100%',
                    filter: 'brightness(50%)',
                }}
            />
            <Box
                css={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    dflex: 'center',
                    fd: 'column',
                }}
            >
                <Text h1 css={{ color: 'white', mb: '0.5rem' }}>
                    {website.hero.title}
                </Text>
                <Text h2 css={{ color: 'white', mb: '0.5rem' }}>
                    {website.hero.subtitle}
                </Text>
                <Text css={{ color: 'white', mb: '0.5rem' }}>
                    {website.hero.description}
                </Text>
                <Button auto as={Link} href={navbar[0].path}>
                    See our services
                </Button>
            </Box>
        </Box>
    )
}
