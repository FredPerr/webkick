import { Link, Navbar, styled } from '@nextui-org/react'
import { LogoTextAnimated } from '@/components/logo'
import { Button } from '@/components/button'
import NextLink from 'next/link'
import { NavbarDrawer } from '@/components/navbar'
import useScrollPosition from '@/hooks/useScrollPosition'

export default function ClassicNavbar() {
    const scrollPosition = useScrollPosition()

    return (
        <Navbar
            variant="static"
            disableBlur
            disableShadow
            css={{ position: 'fixed', background: 'transparent' }}
            containerCss={{
                background:
                    scrollPosition < 200 ? 'transparent' : '$background',
                transition: 'background .25s ease-in-out',
            }}
        >
            <NavbarDrawer />
            <Navbar.Brand>
                <Navbar.Toggle
                    aria-label="toggle navbar drawer"
                    css={{ mr: 10, '@smMin': { d: 'none' } }}
                />
                <NextLink href="/#">
                    <LogoTextAnimated size={30} />
                </NextLink>
            </Navbar.Brand>
            <Navbar.Content
                css={{
                    '@xsMax': { d: 'none' },
                    '& .nextui-navbar-item': {
                        fontWeight: 600,
                        fs: 14,
                        letterSpacing: 10,
                        '@smMax': { d: 'none' },
                    },
                }}
            >
                <Navbar.Item as={Link} href="/#avantages">
                    Avantages
                </Navbar.Item>
                <Navbar.Item as={Link} href="/#solution-web">
                    Solution
                </Navbar.Item>
                <Navbar.Item as={Link} href="/#processus">
                    Processus
                </Navbar.Item>
                <Navbar.Item as={Link} href="/#contact">
                    Contact
                </Navbar.Item>
                <NextLink href="/#soumission">
                    <Button auto>Obtenir ma soumission</Button>
                </NextLink>
            </Navbar.Content>
        </Navbar>
    )
}
