import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from 'layouts'

export default function PrivacyPolicy() {
  return <></>
}

PrivacyPolicy.PageLayout = function PageLayout(page: React.ReactElement) {
  return <DefaultLayout pageName="privacy-policy">{page}</DefaultLayout>
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'privacy-policy'])),
    },
  }
}
