import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from 'layouts'
import Hero from '@/sections/hero'
import ServicesSection from '@/sections/services'
import WebCreation from '@/sections/webcreation/WebCreation'
import { useTheme } from 'styled-components'
import About from '@/sections/about/About'
import Quote from '@/sections/quote'

export default function Home() {
  const theme = useTheme()
  return (
    <>
      <Hero />
      <ServicesSection />
      <div
        css={{
          opacity: 0.99,
          backgroundColor: theme.colors.backgroundPaper,
          backgroundImage: `radial-gradient(#efefef  1px, transparent 1px), radial-gradient(#efefef  1px, ${theme.colors.backgroundPaper} 1px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0,10px 10px',
        }}
      >
        <WebCreation />
      </div>
      <About />
      <Quote />
    </>
  )
}

Home.PageLayout = function PageLayout(page: React.ReactElement) {
  return <DefaultLayout pageName="home">{page}</DefaultLayout>
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  }
}
