import website from '@/constants/website'
import { navbar } from '@/constants/routing'
import { Navbar, Image, Button, Link } from '@nextui-org/react'

export default function ClassicNavbar() {
    return (
        <Navbar
            disableBlur
            variant="static"
            css={{ bgColor: 'black', h: '76px' }}
            containerCss={{ bgColor: 'black', '@smMax': { jc: 'start' } }}
        >
            <Navbar.Toggle
                aria-label="toggle navigation"
                css={{ mr: 10, '@smMin': { d: 'none' } }}
            />
            <Navbar.Content>
                <Navbar.Link href="/#">
                    <Navbar.Brand>
                        <Image src={website.logo} height="100%" width="150px" />
                    </Navbar.Brand>
                </Navbar.Link>
            </Navbar.Content>
            <Navbar.Content gap="$15" css={{ '@smMax': { d: 'none' } }}>
                {navbar.map((route, index) =>
                    route.type === 'button' ? (
                        <Navbar.Item key={index}>
                            <Button auto as={Link} href={route.path}>
                                {route.title}
                            </Button>
                        </Navbar.Item>
                    ) : (
                        <Navbar.Link href={route.path} key={index}>
                            {route.title}
                        </Navbar.Link>
                    )
                )}
            </Navbar.Content>
            <Navbar.Collapse>
                {navbar.map((route, index) =>
                    route.type === 'button' ? (
                        <Navbar.CollapseItem key={index}>
                            <Button auto as={Link} href={route.path}>
                                {route.title}
                            </Button>
                        </Navbar.CollapseItem>
                    ) : (
                        <Navbar.CollapseItem key={index}>
                            <Link href={route.path}>{route.title}</Link>
                        </Navbar.CollapseItem>
                    )
                )}
            </Navbar.Collapse>
        </Navbar>
    )
}
