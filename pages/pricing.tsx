import { DefaultLayout } from '@/layouts'
import PricingHero from '@/sections/home/pricing/PricingHero'
import PricingClarity from '@/sections/home/pricing/PricingClarity'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Pricing() {
  return (
    <>
      <PricingHero />
      <PricingClarity />
    </>
  )
}

Pricing.PageLayout = function PageLayout(page: React.ReactElement) {
  return <DefaultLayout pageName="pricing">{page}</DefaultLayout>
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'pricing'])),
    },
  }
}
