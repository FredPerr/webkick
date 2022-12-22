import Layout from '@/layouts/Layout'
import Hero, { HeroContainer } from '@/sections/hero'
import { Navbar } from '../components/navbar'


export default function Home() {
  return (
    <>
      <HeroContainer>
        <Navbar />
        <Hero />
      </HeroContainer>
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