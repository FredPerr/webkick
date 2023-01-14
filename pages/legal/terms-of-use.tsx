import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from 'layouts'

export default function TermsOfUse() {
  return <></>
}

TermsOfUse.PageLayout = function PageLayout(page: React.ReactElement) {
  return <DefaultLayout pageName="terms-of-use">{page}</DefaultLayout>
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'terms-of-use'])),
    },
  }
}
