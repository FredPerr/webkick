import Box from '@/components/box'
import { Text, Image, Button, Link } from '@nextui-org/react'
import Section from '@/components/section/Section'
import website from '@/constants/website'
import { Title } from '@/components/section'

export default function AboutContainer() {
    return (
        <Section
            id="about"
            title="About us"
            subtitle="What we have done for 20+ years"
            css={{ position: 'relative' }}
        >
            <Image
                src="/images/about-demo.jpg"
                objectFit="cover"
                css={{
                    minWidth: '100vw',
                    maxH: '100vh',
                    mh: '100vh',
                    h: '100vh',
                    filter: 'brightness(30%)',
                }}
            />
            <Box
                css={{
                    position: 'absolute',
                    dflex: 'center',
                    fd: 'column',
                    w: '60%',
                    '@mdMax': { w: '90%' },
                }}
            >
                <Title
                    title="About us"
                    subtitle="What we have done for the past 20+ years"
                />
                <Text
                    css={{
                        ta: 'justify',
                        textShadow: 'text-shadow: 1px 1px 2px black',
                    }}
                >
                    Our real estate company has been serving the community for
                    over 20 years. We are a team of highly trained and
                    experienced professionals, dedicated to helping our clients
                    buy, sell, and rent properties. Our team is knowledgeable
                    about the local real estate market and can assist you in
                    finding the perfect home or investment property. We also
                    have a team of expert negotiators who will work tirelessly
                    to get you the best deal possible. In addition to
                    traditional real estate services, we also offer property
                    management services to help landlords efficiently manage
                    their rental properties. We are committed to providing
                    excellent customer service and ensuring that our clients
                    have a positive and stress-free experience when buying,
                    selling, or renting a property. If you have any questions or
                    would like to learn more about our services, please don't
                    hesitate to contact us.
                </Text>
                <Button as={Link} href="/#contact" css={{ mt: 20, br: 0 }}>
                    Contact us
                </Button>
            </Box>
        </Section>
    )
}
