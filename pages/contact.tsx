import { DefaultLayout } from '@/layouts'
import ContactHero from '@/sections/home/contact/ContactHero'
import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Nous contacter</title>
        <meta
          name="description"
          content="Contactez-nous pour toute demande, question ou commentaire. Notre équipe professionnelle est là pour vous aider. Remplissez notre formulaire de contact ou utilisez nos coordonnées pour nous joindre directement."
        />
      </Head>
      <ContactHero />
    </>
  )
}

Contact.PageLayout = function PageLayout(page: React.ReactElement) {
  return <DefaultLayout pageName="contact">{page}</DefaultLayout>
}
