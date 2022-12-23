import Box from "@/components/box";
import services from "@/constants/services";
import React from "react";
import ServiceCard from "./ServiceCard";


export default function ServicesContainer() {
    return (
        <Box css={{ d: 'flex', jc: 'center', fw: 'wrap' }}>
            {
                services.map((service) => {
                    return <ServiceCard key={service.title} title={service.title} subtitle={service.subtitle} img={service.imgSrc} description={service.description} href={service.href} />
                })
            }
        </Box>
    )
}