import { DefaultLayout } from '@/layouts'
import PricingHero from '@/sections/home/pricing/PricingHero'
import PricingClarity from '@/sections/home/pricing/PricingClarity'

export default function Pricing() {
  return (
    <>
      <PricingHero />
      <PricingClarity />
    </>
  )
}

Pricing.PageLayout = function PageLayout(page: React.ReactElement) {
  return <DefaultLayout pageName="tarification">{page}</DefaultLayout>
}
