import { Title } from '@/components/section'
import Section from '@/components/section/Section'
import { Grid } from '@nextui-org/react'
import TestimonialCard from './TestimonialCard'

export default function TestimonialsSection() {
    return (
        <Section id="testimonials">
            <Title
                title="What our clients say"
                subtitle="Obtain exactly what you ask for"
            />
            <Grid.Container gap={2} justify="center">
                <TestimonialCard
                    title="A&G Real Estate"
                    subtitle="NEW"
                    rating={9}
                    comment="Ipsum non id ipsum consectetur sint dolore est commodo fugiat."
                    note="+10 contracts done"
                    visit="/#"
                    imgSrc="/images/card1-demo.jpg"
                />
            </Grid.Container>
        </Section>
    )
}
