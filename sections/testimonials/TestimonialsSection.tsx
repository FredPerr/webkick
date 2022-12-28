import { Title } from '@/components/section'
import Section from '@/components/section/Section'
import { Button, Grid, Link } from '@nextui-org/react'
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
                    note="NEW"
                    rating={5}
                    comment="I have been thoroughly impressed with the level of professionalism and efficiency of your team. The service we received was top-notch and greatly exceeded our expectations. Thank you for going above and beyond to meet our needs!"
                    subtitle="+10 contracts done"
                    visit="/#"
                    imgSrc="/images/card1-demo.jpg"
                    writer="CEO - A&G Real Estate"
                />
                <TestimonialCard
                    title="A&G Real Estate"
                    note="NEW"
                    rating={5}
                    comment="I have been thoroughly impressed with the level of professionalism and efficiency of your team. The service we received was top-notch and greatly exceeded our expectations. Thank you for going above and beyond to meet our needs!"
                    subtitle="+10 contracts done"
                    visit="/#"
                    imgSrc="/images/card1-demo.jpg"
                    writer="CEO - A&G Real Estate"
                />
                <TestimonialCard
                    title="A&G Real Estate"
                    note="NEW"
                    rating={5}
                    comment="I have been thoroughly impressed with the level of professionalism and efficiency of your team. The service we received was top-notch and greatly exceeded our expectations. Thank you for going above and beyond to meet our needs!"
                    subtitle="+10 contracts done"
                    visit="/#"
                    imgSrc="/images/card1-demo.jpg"
                    writer="CEO - A&G Real Estate"
                />
            </Grid.Container>
            <Button as={Link} css={{br: 0, mt: 14}}>Contact us</Button>
        </Section>
    )
}
