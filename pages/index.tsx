import { Hero } from '@/components/hero'
import DefaultLayout from '@/layouts/Default'

export default function Home() {
    return (
        <>
            <Hero />
        </>
    )
}

Home.layout = (page: React.ReactElement) => {
    return <DefaultLayout>{page}</DefaultLayout>
}
