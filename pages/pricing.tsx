import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from 'layouts'

export default function Pricing() {
  return <></>
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
