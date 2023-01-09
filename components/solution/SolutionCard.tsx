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
                bgColor: '$secondary',
                br: 15,
                p: 20,
                dflex: 'center',
                fd: 'column',
                '& svg': {
                    w: '30%',
                },
            }}
        >
            {props.icon}
            <Text
                css={{
                    mt: 20,
                    ta: 'center',
                    fs: 14,
                    fontWeight: 600,
                    '@smMax': {
                        fs: 12,
                    },
                }}
            >
                {props.title}
            </Text>
        </Box>
    )
}
