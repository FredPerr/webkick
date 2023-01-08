import React from 'react'
import Box from '../box'
import { SectionTitle } from '../section'
import AdvantageCard from './AdvantageCard'
import AdatativeSvg from '@/public/images/advantages/zoom.svg'
import CompetitiveSvg from '@/public/images/advantages/thumb-up.svg'
import CoffeeSvg from '@/public/images/advantages/coffee.svg'
import DashboardSvg from '@/public/images/advantages/dashboard.svg'
import { Button } from '../button'

export default function AdvantagesSection() {
    return (
        <Box>
            <SectionTitle
                title="GAGNANT-GAGNANT"
                subtitle="sur toute la ligne"
            />
            <Box
                css={{
                    mx: '5%',
                    w: '90%',
                    d: 'grid',
                    gridTemplateColumns: `repeat(4, 1fr)`,
                    '@mdMax': {
                        gridTemplateColumns: `repeat(2, 1fr)`,
                    },
                    '@xsMax': {
                        gridTemplateColumns: `repeat(1, 1fr)`,
                    },
                }}
            >
                <AdvantageCard
                    title="Un site Web adaptatif à vos besoins"
                    icon={<AdatativeSvg />}
                    subtitle="Besoin d’un site de petite, moyenne ou grande taille ? Peu importe vos besoin, nous sommes les gens d’expertise qu’il vous faut pour faire croître votre entreprise à l’aide du Web."
                />
                <AdvantageCard
                    title="Des prix réellement compétitifs"
                    icon={<CompetitiveSvg />}
                    subtitle="La plupart des entreprises qui créent des sites Web ont une structure et un processus long et coûteux. Chez WebKick, nous réussissons à réduire les tâches administratives et à accélérer les processus lents avec des outils faits sur mesure pour notre entreprise."
                />
                <AdvantageCard
                    title="On s’occupe de TOUT"
                    icon={<CoffeeSvg />}
                    subtitle="Vous ne connaissez rien en informatique? Aucun problème! Nous prenons conscience de vos besoins pour que vous n’ayez plus à vous soucier de rien. Vous avez un problème ou une modification que vous voulez apporter ? Contacter nous et laisser la magie opérer."
                />
                <AdvantageCard
                    title="On est là pour rester à vos côtés"
                    icon={<DashboardSvg />}
                    subtitle="Notre entreprise croissante sera toujours là pour vous soutenir. Notre équipe jeune et grandissante n’est pas près d’arrêter ses activités. Au contraire, nous ne faisons que commencer!"
                />
            </Box>
            <Button css={{ mx: 'auto', my: 20 }}>Obtenir ma soumission</Button>
        </Box>
    )
}
