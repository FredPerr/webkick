import { Text } from '@nextui-org/react'
import Box from '../box'

interface TitleProps {
    title?: string
    subtitle?: string
}

export default function Title(props: TitleProps) {
    return (
        <Box css={{ my: 30, ta: 'center' }}>
            {props.title && (
                <Text h2 b css={{ fontFamily: '12px', mb: 0 }}>
                    {props.title}
                </Text>
            )}
            {props.subtitle && (
                <Text h4 b>
                    {props.subtitle}
                </Text>
            )}
        </Box>
    )
}
