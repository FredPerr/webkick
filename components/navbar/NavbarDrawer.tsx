import { Navbar, Link } from '@nextui-org/react'
import { Button } from '@/components/button'
import NextLink from 'next/link'

export default function NavbarDrawer() {
    return (
        <Navbar.Collapse
            css={{
                background: '$secondary',
                dflex: 'left',
                fd: 'column',
                ta: 'left',
                '& .nextui-navbar-collapse-wrapper': {
                    background: '$secondary',
                    dflex: 'left',
                    fd: 'column',
                },
            }}
        >
            <Navbar.CollapseItem>
                <Link href="/#avantages">Nos Avantages</Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
                <Link href="/#solution-web">Notre Solution Web</Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
                <Link href="/#processus">Notre processus</Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
                <Link href="/#contacter-autrement">Nous contacter</Link>
            </Navbar.CollapseItem>
            <NextLink href="/#soumission">
                <Navbar.CollapseItem>
                    <Button>Obtenir ma soumission</Button>
                </Navbar.CollapseItem>
            </NextLink>
        </Navbar.Collapse>
    )
}
