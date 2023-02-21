import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from 'layouts'
import HomeHero from '@/sections/hero/HomeHero'
import SolutionSection from '@/sections/solution/SolutionSection'
import GaranteeSection from '@/sections/garantee/GaranteeSection'
import ProcessSection from '@/sections/process/ProcessSection'

export default function Home() {
  return (
    <>
      <HomeHero />
      <SolutionSection />
      <GaranteeSection />
      <ProcessSection />
    </>
  )
}

Home.PageLayout = function PageLayout(page: React.ReactElement) {
  return <DefaultLayout pageName="home">{page}</DefaultLayout>
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  }
}
