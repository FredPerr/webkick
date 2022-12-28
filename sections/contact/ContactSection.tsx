import Box from '@/components/box'
import { Title } from '@/components/section'
import Section from '@/components/section/Section'
import {
    Button,
    Col,
    Grid,
    Input,
    Row,
    Text,
    Textarea,
    useInput,
} from '@nextui-org/react'

export default function ContactSection() {
    const {
        value: messageValue,
        setValue: setMessageValue,
        bindings: messageBindings,
    } = useInput('')

    const {
        value: nameValue,
        setValue: setNameValue,
        bindings: nameBindings,
    } = useInput('')

    const {
        value: phoneValue,
        setValue: setPhoneValue,
        bindings: phoneBindings,
    } = useInput('')

    const {
        value: emailValue,
        setValue: setEmailValue,
        bindings: emailBindings,
    } = useInput('')

    return (
        <Section id="contact">
            <Title title="Reach out for answers, to get a quote or get a demo" />
            <Box>
                <Grid.Container gap={3} justify="center">
                    <Grid xs={6} md={6}>
                        <Input
                            {...nameBindings}
                            bordered
                            fullWidth
                            labelPlaceholder="Full name"
                        />
                    </Grid>
                    <Grid xs={6} md={6}>
                        <Input
                            {...phoneBindings}
                            type="tel"
                            bordered
                            fullWidth
                            labelPlaceholder="Phone number"
                        />
                    </Grid>
                    <Grid xs={12} md={12}>
                        <Input
                            {...emailBindings}
                            type="email"
                            bordered
                            fullWidth
                            labelPlaceholder="Email address"
                        />
                    </Grid>
                    <Grid xs={12}>
                        <Textarea
                            {...messageBindings}
                            spellCheck={false}
                            bordered
                            fullWidth
                            labelPlaceholder="Message / Question"
                            css={{ br: 0 }}
                        />
                    </Grid>
                    <Grid
                        xs={12}
                        justify="center"
                        css={{ fd: 'column', ta: 'center' }}
                    >
                        <Button
                            onClick={(e) => {
                                console.log({
                                    nameValue,
                                    phoneValue,
                                    emailValue,
                                    messageValue,
                                })
                            }}
                        >
                            Send message
                        </Button>
                        <Text css={{ mt: 10 }}>
                            We will get back to you very soon!
                        </Text>
                    </Grid>
                    <Grid xs={12} justify="center"></Grid>
                </Grid.Container>
            </Box>
        </Section>
    )
}
