import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from 'layouts'

export default function Contact() {
  return <></>
}

Contact.PageLayout = function PageLayout(page: React.ReactElement) {
  return <DefaultLayout pageName="contact">{page}</DefaultLayout>
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact'])),
    },
  }
}
