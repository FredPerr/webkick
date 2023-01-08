import { Text } from '@nextui-org/react'
import Box from '../box'

interface SolutionCardProps {
    title: string
    icon: React.ReactNode
}

export default function SolutionCard(props: SolutionCardProps) {
    return (
        <Box
            css={{
                position: 'relative',
                bgColor: '$secondary',
                br: 15,
                w: 250,
                h: 250,
                m: 20,
                dflex: 'center',
                '& svg': {
                    w: '30%',
                },
            }}
        >
            {props.icon}
            <Text
                css={{
                    position: 'absolute',
                    top: '75%',
                    verticalAlign: 'middle',
                    w: '90%',
                    left: '50%',
                    ta: 'center',
                    transform: 'translateX(-50%)',
                    fs: 14,
                    fontWeight: 600,
                }}
            >
                {props.title}
            </Text>
        </Box>
    )
}
