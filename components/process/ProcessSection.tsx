import StepText from './StepText'
import Box from '../box'
import { SectionTitle } from '../section'

export default function ProcessSection() {
    return (
        <Box css={{ w: '100%' }}>
            <SectionTitle
                title="Création & Hébergement Web"
                subtitle="simple, efficace et toujours à votre écoute"
            />
            <Box>
                <Box
                    css={{
                        d: 'grid',
                        gridTemplate: '1fr / 40% 20% 40%',
                        ai: 'center',
                        jc: 'space-between',
                    }}
                >
                    <Box></Box>
                    <Box></Box>
                    <StepText
                        step={1}
                        title="Entretenons-nous"
                        subtitle="Laissez-nous comprendre vos besoins et vos valeurs pour que votre site Web concorde avec vos attentes."
                        steps={[
                            'Établissons vos besoins en détails',
                            'Obtenez votre soumission finale dans un bref délai',
                            'Revisons les points à ajuster s’il y a lieu et débutons le développement sans attendre',
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    )
}
