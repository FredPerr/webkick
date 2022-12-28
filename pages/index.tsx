import Layout from '@/layouts/Layout'
import Hero, { HeroContainer } from '@/sections/hero'
import { Navbar } from '../components/navbar'
import { AboutSection } from '@/sections/about'
import ServicesSection from '@/sections/services/ServicesSection'
import { TestimonialsSection } from '@/sections/testimonials'
import PortfolioSection from '@/sections/portfolio/PortfolioSection'

export default function Home() {
    return (
        <>
            <HeroContainer>
                <Navbar />
                <Hero />
            </HeroContainer>
            <ServicesSection />
            <AboutSection />
            <TestimonialsSection />
            {/* <PortfolioSection /> */}
        </>
    )
}

Home.layout = (page: React.ReactElement) => {
    return <Layout>{page}</Layout>
}
