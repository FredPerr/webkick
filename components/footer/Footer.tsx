import { Text } from '@nextui-org/react'
import Box from '../box'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <Box
            css={{
                w: '100%',
                pt: 100,
                ta: 'center',
                bgColor: 'white',
                clipPath: 'polygon(0 0, 100% 45%, 100% 100%, 0 100%)',
            }}
        >
            <Text css={{ color: '$secondary' }}>&copy; {year} -</Text>
        </Box>
    )
}
