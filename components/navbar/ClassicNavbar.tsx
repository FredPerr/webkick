import { Navbar } from '@nextui-org/react'
import { LogoTextAnimated } from '../logo'

export default function ClassicNavbar() {
    return (
        <Navbar variant="static" disableBlur disableShadow>
            <Navbar.Brand>
                <LogoTextAnimated size={30} />
            </Navbar.Brand>
        </Navbar>
    )
}
