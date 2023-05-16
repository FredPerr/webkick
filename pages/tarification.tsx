import { DefaultLayout } from '@/layouts'
import PricingHero from '@/sections/home/pricing/PricingHero'
import PricingClarity from '@/sections/home/pricing/PricingClarity'
import Head from 'next/head'

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Nos offres à bon prix</title>
        <meta
          name="description"
          content=" informations détaillées sur nos plans, leurs fonctionnalités et les prix correspondants. Nous proposons des solutions adaptées à tous les budgets et besoins. Contactez-nous pour obtenir un devis personnalisé ou pour discuter de vos besoins spécifiques."
        />
      </Head>
      <PricingHero />
      <PricingClarity />
    </>
  )
}

Pricing.PageLayout = function PageLayout(page: React.ReactElement) {
  return <DefaultLayout pageName="tarification">{page}</DefaultLayout>
}
