import StepText from './StepText'
import Box from '../box'
import { SectionTitle } from '../section'
import SeparatorSvg from '@/public/images/process/separator.svg'
import ConversationSvg from '@/public/images/process/conversation.svg'
import WebsiteSkeletonSvg from '@/public/images/process/website-skeleton.svg'
import LaunchSvg from '@/public/images/process/launch.svg'
import { HorizontalLine, VerticalLine } from './StepLine'
import { Button } from '../button'

export default function ProcessSection() {
    return (
        <Box css={{ w: '100%', pb: 100 }}>
            <SeparatorSvg style={{ width: '100%', marginTop: 20 }} />
            <SectionTitle
                title="Création & Hébergement Web"
                subtitle="simple, efficace et toujours à votre écoute"
            />
            <Box css={{ mt: 100 }}>
                <Box
                    css={{
                        d: 'grid',
                        gridTemplate: '1fr 200px 1fr 200px 1fr / 40% 300px 40%',
                        ai: 'center',
                        jc: 'space-between',
                        mx: '8%',
                    }}
                >
                    <Box css={{ justifySelf: 'center' }}>
                        <ConversationSvg />
                    </Box>
                    <Box css={{ mx: 20, dflex: 'center' }}>
                        <HorizontalLine />
                    </Box>
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
                    {/* Second line */}
                    <Box css={{ justifySelf: 'center' }}>
                        <VerticalLine />
                    </Box>
                    <Box></Box>
                    <Box></Box>
                    <StepText
                        css={{ justifySelf: 'center' }}
                        step={2}
                        title="Développement de votre site "
                        subtitle="En prenant compte de vos besoin, nous développons rapidement votre site et nous demandons vos commentaire sur certains aspects lorsque nécéssaire."
                        steps={[
                            'Fabrication de la maquette du site',
                            'Avis du client sur la maquette',
                            'Développement et implémentation du site avec la maquette',
                            'Test de toutes les fonctionalités du site et correction des bugs s’il y a lieu',
                        ]}
                    />
                    <HorizontalLine />
                    <Box css={{ justifySelf: 'center' }}>
                        <WebsiteSkeletonSvg />
                    </Box>
                    <Box></Box>
                    <Box></Box>
                    <Box css={{ justifySelf: 'center' }}>
                        <VerticalLine />
                    </Box>
                    <Box>
                        <LaunchSvg />
                    </Box>
                    <HorizontalLine />
                    <StepText
                        css={{ justifySelf: 'center' }}
                        step={3}
                        title="Hébergement & Déployment du site"
                        subtitle="Installons le site sur un serveur approprié et mettons le public pour que les clients qui cherchent vos services vous trouvent enfin!"
                        steps={[
                            'Installation du site sur un serveur adapté au site',
                            'Déployment du site au grand public',
                            'Paiement avec possibilité de financement sur 12 mois à 0%',
                        ]}
                    />
                </Box>
            </Box>
            <Button css={{ mx: 'auto' }}>Obtenir ma soumission</Button>
        </Box>
    )
}
