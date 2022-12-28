import Box from '@/components/box'
import Section from '@/components/section/Section'
import { CSS } from '@nextui-org/react/types/theme'

interface HeroContainerProps {
    children: React.ReactNode
    css?: CSS
}

export default function HeroContainer(props: HeroContainerProps) {
    return (
        <Box
            id="hero"
            css={{
                d: 'flex',
                fd: 'column',
                h: '100vh',
                w: '100vw',
                ...props.css,
            }}
        >
            {props.children}
        </Box>
    )
}
