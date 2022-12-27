import Layout from '@/layouts/Layout'
import Hero, { HeroContainer } from '@/sections/hero'
import { Navbar } from '../components/navbar'
import { ServicesContainer } from '@/sections/services'
import Section from '@/components/section/Section'
import website from '@/constants/website'
import { Button, Link } from '@nextui-org/react'
import AboutSection from '@/sections/about/AboutSection'
import ServicesSection from '@/sections/services/ServicesSection'

export default function Home() {
  return (
    <>
      <HeroContainer>
        <Navbar />
        <Hero />
      </HeroContainer>
      <ServicesSection/>
      <AboutSection/>
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