import DocumentLayout from '@/layouts/DocumentLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function PrivacyPolicy() {
  return <></>
}

PrivacyPolicy.PageLayout = function PageLayout(page: React.ReactElement) {
  return (
    <DocumentLayout
      title="Politique de confidentialité"
      pageName="privacy policy"
    >
      {page}
    </DocumentLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'privacy-policy'])),
    },
  }
}
