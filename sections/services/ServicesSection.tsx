import ServicesContainer from './ServicesContainer'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import website from '@/constants/website'
import Section from '@/components/section/Section'
import { Title } from '@/components/section'

export default function ServicesSection() {
    return (
        <Section
            id="services"
            title={website.services.title}
            subtitle={website.services.subtitle}
        >
            <Title
                title="What we help with"
                subtitle="Be one of our precious clients that get ahead of the competition"
            />
            <ServicesContainer />
            <Button
                auto
                size="lg"
                as={Link}
                href="/#contact"
                css={{ my: 40, br: 0 }}
            >
                Get in touch
            </Button>
        </Section>
    )
}
