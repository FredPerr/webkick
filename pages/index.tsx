import Layout from '@/layouts/Layout'
import Hero, { HeroContainer } from '@/sections/hero'
import { Navbar } from '../components/navbar'
import { ServicesContainer } from '@/sections/services'
import Section from '@/components/section/Section'
import website from '@/constants/website'
import { Button, Link } from '@nextui-org/react'

export default function Home() {
  return (
    <>
      <HeroContainer>
        <Navbar />
        <Hero />
      </HeroContainer>
      <Section id="services" title={website.services.title} subtitle={website.services.subtitle}>
        <ServicesContainer/>
        <Button auto size="lg" as={Link} href="/#contact" css={{my: 40, br: 0}}>Get in touch</Button>
      </Section>
    </>
  )
}


Home.layout = (page: React.ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}