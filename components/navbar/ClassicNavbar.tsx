import website from "@/constants/website";
import { navbar } from "@/constants/routing"
import { Navbar, Image, Button, Link } from "@nextui-org/react";


export default function ClassicNavbar() {
    return (
        <Navbar disableBlur variant="static" css={{ bgColor: 'white' }}>
            <Navbar.Content>
                <Navbar.Link href="/#">
                    <Navbar.Brand>
                        <Image src={website.logo} height="100%" width="150px" />
                    </Navbar.Brand>
                </Navbar.Link>
            </Navbar.Content>
            <Navbar.Content gap="$15">
                {navbar.map((route, index) =>
                    route.type === "button" ?
                        <Navbar.Item><Button auto as={Link} href={route.path}>{route.title}</Button></Navbar.Item>
                        :
                        <Navbar.Link href={route.path} key={index}>
                            {route.title}
                        </Navbar.Link>
                )}
            </Navbar.Content>
        </Navbar>
    )
}