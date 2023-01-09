import Box from '../box'

interface StepProps {
    children: React.ReactNode
}

export default function Step(props: StepProps) {
    return (
        <Box
            css={{
                d: 'grid',
                justifyItems: 'center',
                alignItems: 'center',
                gridTemplate: '1fr / 50% 50%',
                py: 50,
                '@smMax': { gridTemplate: '1fr 1fr / 100%' },
            }}
        >
            {props.children}
        </Box>
    )
}
