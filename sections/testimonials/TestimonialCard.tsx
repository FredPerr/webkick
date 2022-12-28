import Box from '@/components/box'
import { Button, Card, Col, Grid, Link, Row, Text } from '@nextui-org/react'

interface TestimonialCardProps {
    title: string
    subtitle: string
    rating: number
    comment: string
    visit: string
    note: string
    imgSrc: string
    writer: string
}

export default function TestimonialCard(props: TestimonialCardProps) {
    return (
        <Grid xs={11} sm={6} md={4}>
            <Card css={{ w: '100%', height: '70vh' }}>
                <Card.Header
                    css={{
                        position: 'absolute',
                        zIndex: 1,
                        top: 5,
                        jc: 'left',
                        ai: 'start',
                    }}
                >
                    <Col>
                        <Text
                            size={12}
                            weight="bold"
                            transform="uppercase"
                            color="#ffffffAA"
                        >
                            {[...Array(5)].map((e, i) => (
                                <span key={i}>
                                    {i + 1 > props.rating ? (
                                        <>&#9734;</>
                                    ) : (
                                        <>&#9733;</>
                                    )}
                                </span>
                            ))}
                        </Text>
                        <Box css={{ d: 'flex', ai: 'center' }}>
                            <Text h3 color="black" css={{ mb: 0, mr: 14 }}>
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
                        </Box>
                        <Text
                            size={12}
                            weight="bold"
                            transform="uppercase"
                            color="#ffffffAA"
                        >
                            {props.subtitle}
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
                        <Col css={{ dflex: 'center', fd: 'column' }}>
                            <Text
                                color="#000"
                                size={12}
                                css={{ mb: 5, jc: 'justify' }}
                            >
                                {props.comment} - {props.writer}
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
