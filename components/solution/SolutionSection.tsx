import Box from '../box'
import SeparatorSvg from '@/public/images/solution/separator.svg'
import { SectionTitle } from '../section'
import SolutionCard from './SolutionCard'
import ResponsiveSvg from '@/public/images/solution/responsive.svg'
import DomainSvg from '@/public/images/solution/domain.svg'
import EditSvg from '@/public/images/solution/edit.svg'
import FunctionalitySvg from '@/public/images/solution/functionality.svg'
import HostingSvg from '@/public/images/solution/hosting.svg'
import MaintenanceSvg from '@/public/images/solution/maintenance.svg'
import SecureSvg from '@/public/images/solution/secure.svg'
import SEOSvg from '@/public/images/solution/seo.svg'
import SupportSvg from '@/public/images/solution/support.svg'
import { Button } from '../button'

export default function SolutionSection() {
    return (
        <Box>
            <SeparatorSvg style={{ marginTop: 20 }} />
            <SectionTitle
                title="Un site simple ou complex ?"
                subtitle="nous sommes là pour que ça se réalise"
            />
            <Box
                css={{
                    px: '5%',
                    d: 'grid',
                    mb: 20,
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gridTemplateRows: '1fr 1fr 1fr 1fr',
                    justifyItems: 'center',
                    gap: 20,
                    '@smMax': {
                        gridTemplateColumns: 'repeat(2, 1fr)',
                    },
                }}
            >
                <SolutionCard
                    title="Adapté à tous les écrans"
                    icon={<ResponsiveSvg />}
                />
                <SolutionCard
                    title="Domaines .com et .ca"
                    icon={<DomainSvg />}
                />
                <SolutionCard
                    title="Hébergement fiable et de haute performance"
                    icon={<HostingSvg />}
                />
                <SolutionCard
                    title="Support continu et illimité"
                    icon={<SupportSvg />}
                />
                <SolutionCard
                    title="Retouches rapides gratuites"
                    icon={<EditSvg />}
                />
                <SolutionCard
                    title="Optimizations pour moteurs de recherche"
                    icon={<SEOSvg />}
                />
                <SolutionCard
                    title="Site sécurisé et constamment supervisé"
                    icon={<SecureSvg />}
                />
                <SolutionCard
                    title="Fonctionalités particulières à la demande"
                    icon={<FunctionalitySvg />}
                />
            </Box>
            <Button css={{ mx: 'auto', my: 10 }}>Obtenir ma soumission</Button>
        </Box>
    )
}
