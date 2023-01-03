import { Navbar } from '@nextui-org/react'
import { LogoAnimated } from '../logo'

export default function ClassicNavbar() {
    return (
        <Navbar variant="static">
            <Navbar.Brand>
                <LogoAnimated size={50}/>
            </Navbar.Brand>
        </Navbar>
    )
}
