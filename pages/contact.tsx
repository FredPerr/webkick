import { DefaultLayout } from '@/layouts'
import ContactHero from '@/sections/home/contact/ContactHero'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Contact() {
  return <ContactHero />
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
