import Box from "../box"
import Title from "./Title"

interface SectionProps {
    title?: string,
    subtitle?: string,
    children: React.ReactNode,
    id: string
}

export default function Section(props: SectionProps) {
    return (
        <Box id={props.id} css={{width: '100%', dflex: 'center', fd:'column', py: 70}}>
            <Title title={props.title}/>
            {props.children}
        </Box>
    )
}