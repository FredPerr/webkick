import Layout from '@/layouts/Layout'
import Hero, { HeroContainer } from '@/sections/hero'
import { Navbar } from '../components/navbar'
import { AboutSection } from '@/sections/about'
import ServicesSection from '@/sections/services/ServicesSection'
import { TestimonialsSection } from '@/sections/testimonials'

export default function Home() {
    return (
        <>
            <HeroContainer>
                <Navbar />
                <Hero />
            </HeroContainer>
            <ServicesSection />
            <AboutSection />
            <TestimonialsSection/>
        </>
    )
}

Home.layout = (page: React.ReactElement) => {
    return <Layout>{page}</Layout>
}
