import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Layout from './Layout'

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Layout>
            <Navbar />
            {children}
            <Footer />
        </Layout>
    )
}
