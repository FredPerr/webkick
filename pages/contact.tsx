import { DefaultLayout } from '@/layouts'
import ContactHero from '@/sections/home/contact/ContactHero'

export default function Contact() {
  return <ContactHero />
}

Contact.PageLayout = function PageLayout(page: React.ReactElement) {
  return <DefaultLayout pageName="contact">{page}</DefaultLayout>
}
