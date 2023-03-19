import { DefaultLayout } from 'layouts'
import HomeHero from '@/sections/home/hero/HomeHero'
import SolutionSection from '@/sections/home/solution/SolutionSection'
import GaranteeSection from '@/sections/home/garantee/GaranteeSection'
import ProcessSection from '@/sections/home/process/ProcessSection'
import QuoteSection from '@/sections/home/quote/QuoteSection'

export default function Home() {
  return (
    <>
      <HomeHero />
      <SolutionSection />
      <GaranteeSection />
      <ProcessSection />
      <QuoteSection />
    </>
  )
}

Home.PageLayout = function PageLayout(page: React.ReactElement) {
  return <DefaultLayout pageName="accueil">{page}</DefaultLayout>
}
