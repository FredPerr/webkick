import Box from "@/components/box";
import { Text } from "@nextui-org/react";

export default function StaticHero(){
    return (
        <Box id="hero" css={{d: 'flex', flex: '1 1 auto', w: '100%', bgColor: '$gray500', dflex: 'center', border: '5px solid $gray700', fd: 'column'}}>
            <Text css={{fontSize: '$4xl', color: '$gray700'}}>Hero background image</Text>
        </Box>
    )
}