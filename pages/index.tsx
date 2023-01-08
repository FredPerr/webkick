import { AdvantagesSection } from '@/components/advantages'
import { Hero } from '@/components/hero'
import { ProcessSection } from '@/components/process'
import { SolutionSection } from '@/components/solution'
import DefaultLayout from '@/layouts/Default'

export default function Home() {
    return (
        <>
            <Hero />
            <AdvantagesSection />
            <SolutionSection />
            <ProcessSection />
        </>
    )
}

Home.layout = (page: React.ReactElement) => {
    return <DefaultLayout>{page}</DefaultLayout>
}
