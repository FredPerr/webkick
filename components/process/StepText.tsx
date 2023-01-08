import { Text } from '@nextui-org/react'
import Box from '@/components/box'

interface StepTextProps {
    title: string
    subtitle: string
    steps: string[]
    step: number
}

export default function StepText(props: StepTextProps) {
    return (
        <Box css={{ w: '70%' }}>
            <Text h5 css={{ fs: '$2xl' }}>
                {props.step}. {props.title}
            </Text>
            <Text css={{ ml: 24, color: '$gray800' }}>{props.subtitle}</Text>
            <ul style={{ listStyleType: 'disc', paddingLeft: 3 }}>
                {props.steps.map((step, index) => (
                    <li style={{ opacity: 0.85, marginBottom: 0 }} key={index}>
                        {step}
                    </li>
                ))}
            </ul>
        </Box>
    )
}
