import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Box from '@/components/box'
import Layout from './Layout'

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Layout>
            <Navbar logoStatic />
            <Box css={{ pt: 80, px: '8%' }}>{children}</Box>
            <Footer />
        </Layout>
    )
}
