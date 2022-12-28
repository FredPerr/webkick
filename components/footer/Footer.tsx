import website from '@/constants/website'
import { Grid, Text } from '@nextui-org/react'
import Box from '../box'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <Box css={{ w: '100%', ta: 'center' }}>
            <Text>
                &copy; {year} - {website.title}
            </Text>
        </Box>
    )
}
