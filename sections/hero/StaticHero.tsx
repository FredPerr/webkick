import Box from "@/components/box";
import { Text } from "@nextui-org/react";

export default function StaticHero(){
    return (
        <Box id="hero" css={{h: '100vh', w: '100vw', bgColor: '$gray500', dflex: 'center', border: '5px solid $gray700'}}>
            <Text css={{fontSize: '$4xl', color: '$gray700'}}>Hero background image</Text>
        </Box>
    )
}