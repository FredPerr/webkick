import Box from '@/components/box'
import { Card, Text, Link } from '@nextui-org/react'

interface ServiceCardProps {
    title?: string
    subtitle?: string
    description?: string
    img: string
    href?: string
}

export type ServiceCardType = typeof ServiceCard

export default function ServiceCard(props: ServiceCardProps) {
    return (
        <Card css={{ fd: 'column', mw: '350px', p: 20, br: 0, m: 10 }}>
            <Card.Header>
                <img
                    src={props.img}
                    width="40px"
                    height="40px"
                    alt={props.title}
                />
                <Box css={{ ml: '$8' }}>
                    <Text h4 css={{ lineHeight: '$xs' }}>
                        {props.title}
                    </Text>
                    <Text css={{ color: '$accents8' }}>{props.subtitle}</Text>
                </Box>
            </Card.Header>
            <Card.Body>
                <Text>{props.description}</Text>
            </Card.Body>
            {props.href && (
                <Card.Footer>
                    <Link color="primary" target="_blank" href={props.href}>
                        See more
                    </Link>
                </Card.Footer>
            )}
        </Card>
    )
}
