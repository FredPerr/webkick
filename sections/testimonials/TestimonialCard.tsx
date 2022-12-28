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
                        <Text h3 color="black">
                            {props.title}
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
                        <Col>
                            <Text color="#000" size={12}>
                                {props.note}
                            </Text>
                            <Text color="#000" size={12}>
                                {props.comment}
                            </Text>
                        </Col>
                        <Col>
                            <Row justify="flex-end">
                                <Button
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
                                        as={Link}
                                    >
                                        Visit
                                    </Text>
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
