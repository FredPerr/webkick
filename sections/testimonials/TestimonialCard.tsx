import { Button, Card, Col, Grid, Link, Row, Text } from '@nextui-org/react'

interface TestimonialCardProps {
    title: string
    subtitle: string
    rating: number
    comment: string
    visit: string
    note: string
    imgSrc: string
}

export default function TestimonialCard(props: TestimonialCardProps) {
    return (
        <Grid xs={12} sm={3}>
            <Card css={{ w: '100%', height: '70vh' }}>
                <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                    <Col>
                        <Text
                            size={12}
                            weight="bold"
                            transform="uppercase"
                            color="#ffffffAA"
                        >
                            {props.subtitle}
                        </Text>
                        <Text h3 color="black" css={{ mb: 0 }}>
                            {props.title}
                        </Text>
                        <Text
                            size={12}
                            weight="bold"
                            transform="uppercase"
                            color="#ffffffAA"
                        >
                            {props.note}
                        </Text>
                    </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src={props.imgSrc}
                        objectFit="cover"
                        alt={props.title}
                        css={{ minH: '100%', h: '100%', minW: '100%' }}
                    />
                </Card.Body>
                <Card.Footer
                    isBlurred
                    css={{
                        position: 'absolute',
                        bgBlur: '#ffffff66',
                        borderTop:
                            '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                        bottom: 0,
                        zIndex: 1,
                    }}
                >
                    <Row>
                        <Col css={{dflex: 'center', fd: 'column'}}>
                            <Text color="#000" size={12}>
                                {props.comment}
                            </Text>
                            <Button
                                size="sm"
                                as={Link}
                                href={props.visit}
                                flat
                                auto
                                rounded
                                color="primary"
                            >
                                <Text
                                    css={{ color: 'inherit' }}
                                    size={12}
                                    weight="bold"
                                    transform="uppercase"
                                >
                                    Visit
                                </Text>
                            </Button>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
