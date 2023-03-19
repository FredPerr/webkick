import DocumentLayout from '@/layouts/DocumentLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function TermsOfUse() {
  return <></>
}

TermsOfUse.PageLayout = function PageLayout(page: React.ReactElement) {
  return (
    <DocumentLayout title="Terms of use" pageName="terms of use">
      {page}
    </DocumentLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'terms-of-use'])),
    },
  }
}
