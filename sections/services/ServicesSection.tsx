import Box from "@/components/box";
import ServicesContainer from "./ServicesContainer";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function ServicesSection() {
    return (
        <Box>
            <ServicesContainer />
            <Button as={Link} href="/#contact">Get in touch</Button>
        </Box>
    )
}