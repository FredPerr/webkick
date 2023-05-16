import { DefaultLayout } from '@/layouts'
import PricingHero from '@/sections/home/pricing/PricingHero'
import PricingClarity from '@/sections/home/pricing/PricingClarity'
import Head from 'next/head'

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Nos offres à bon prix</title>
      </Head>
      <PricingHero />
      <PricingClarity />
    </>
  )
}

Pricing.PageLayout = function PageLayout(page: React.ReactElement) {
  return <DefaultLayout pageName="tarification">{page}</DefaultLayout>
}
