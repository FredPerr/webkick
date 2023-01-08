import { Text } from '@nextui-org/react'
import Box from '../box'

export default function SectionTitle(props: {
    title: string
    subtitle: string
    contrast?: boolean
}) {
    return (
        <Box
            css={{
                ta: 'center',
                my: 30,
                '& h3, h4': { color: props.contrast ? '$secondary' : 'white' },
            }}
        >
            <Text h3 css={{ fontWeight: 800, mb: 0 }}>
                {props.title}
            </Text>
            <Text h4 css={{ fontWeight: 400 }}>
                {props.subtitle}
            </Text>
        </Box>
    )
}
