import { Text } from '@nextui-org/react'
import Box from '../box'

interface AdvantageCardProps {
    title: string
    subtitle: string
    icon: React.ReactNode
}

export default function AdvantageCard({
    title,
    subtitle,
    icon,
}: AdvantageCardProps) {
    return (
        <Box
            css={{
                p: 25,
                bgColor: '$secondary',
                br: 20,
                m: 10,
                d: 'grid',
                gridTemplate: '80px auto / 20% auto ',
                columnGap: 20,
                '& svg': { as: 'center', mx: 'auto' },
            }}
        >
            {icon}
            <Text css={{ fontWeight: 600, fs: 18, as: 'center' }}>{title}</Text>
            <Text
                css={{
                    fs: 14,
                    gridColumnStart: 1,
                    gridColumnEnd: 3,
                    as: 'start',
                }}
            >
                {subtitle}
            </Text>
        </Box>
    )
}
