import { Link, Text } from '@nextui-org/react'
import Box from '../box'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <Box
            css={{
                px: '8%',
                ta: 'center',
                py: 20,
                d: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                '& p, a': { fs: 14 },
                justifyItems: 'center',
            }}
        >
            <Link href="/politique-de-confidentialite">
                <Text css={{ color: '$gray700', fs: 14 }}>
                    Politique de confidentialité
                </Text>
            </Link>
            <Text css={{ color: '$gray800' }}>&copy; {year} - WebKick CA</Text>
            <Text css={{ color: '$gray700' }}>webkick.agency@gmail.com</Text>
        </Box>
    )
}
