import Layout from '@/layouts/Layout'
import { LogoAnimated } from '@/components/logo'

export default function Home() {
    return (
        <>
            <LogoAnimated />
        </>
    )
}

Home.layout = (page: React.ReactElement) => {
    return <Layout>{page}</Layout>
}
