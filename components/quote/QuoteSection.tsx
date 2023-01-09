import { Input, Textarea, useModal, Modal, Text } from '@nextui-org/react'
import Box from '../box'
import { SectionTitle } from '../section'
import WorldMapSvg from '@/public/images/quote/world-map.svg?url'
import { Button } from '../button'

export default function QuoteSection() {
    const { setVisible, bindings } = useModal()
    return (
        <Box
            css={{
                px: '8%',
                position: 'relative',
                bgColor: '$secondary',
                background: `no-repeat url(${WorldMapSvg})`,
                py: 100,
                borderTop: '1px solid $border',
                borderBottom: '1px solid $border',
            }}
        >
            <SectionTitle
                title="Faire ma demande de soumission"
                subtitle="retour rapide en 24H-48H"
            />
            <Box
                css={{
                    d: 'grid',
                    gridTemplate: 'repeat(4, 1fr) / 50% 50%',
                    gap: 10,
                    columnGap: 40,
                    '& .nextui-input-container--textarea, nextui-input-wrapper--shadow':
                        { h: '100%' },
                }}
            >
                <Input fullWidth shadow clearable label="Nom complet" />
                <Textarea
                    fullWidth
                    minRows={13}
                    maxRows={13}
                    css={{ gridRowStart: 1, gridRowEnd: 5, gridColumnStart: 2 }}
                    label="Brève description de votre demande"
                    placeholder="Décrivez très brièvement votre requête. Nous définirons plus en détails la soumission"
                />
                <Input
                    fullWidth
                    shadow
                    clearable
                    required
                    label="Entreprise représentée"
                />
                <Input
                    fullWidth
                    shadow
                    clearable
                    required
                    label="Addresse courriel"
                    type="email"
                />
                <Input
                    fullWidth
                    shadow
                    clearable
                    required
                    label="Numéro de téléphone"
                    type="tel"
                />
            </Box>
            <Button css={{ mx: 'auto', mt: 40 }}>
                Envoyer ma demande de soumission
            </Button>
            <Button
                id="contacter-autrement"
                onPress={() => setVisible(true)}
                css={{ mx: 'auto', mt: 20, bgColor: '$gray600' }}
            >
                Nous contacter autrement
            </Button>
            <Modal
                closeButton
                aria-labelledby="contact-information"
                aria-describedby="contact webkick via email"
                {...bindings}
            >
                <Modal.Header>
                    <Text size={18}>Comment nous contacter rapidement</Text>
                </Modal.Header>
                <Modal.Body>
                    <Text>
                        Pour nous contacter rapidement, envoyez-nous un email{' '}
                        <strong>webkick.agency@gmail.com</strong>
                    </Text>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        flat
                        auto
                        color="primary"
                        onPress={() => setVisible(false)}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Box>
    )
}
