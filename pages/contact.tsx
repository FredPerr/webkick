import { DefaultLayout } from '@/layouts'
import ContactHero from '@/sections/home/contact/ContactHero'
import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Nous contacter</title>
      </Head>
      <ContactHero />
    </>
  )
}

Contact.PageLayout = function PageLayout(page: React.ReactElement) {
  return <DefaultLayout pageName="contact">{page}</DefaultLayout>
}
