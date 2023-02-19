import SectionTitle from '@/components/section/SectionTitle'
import styles from './SolutionSection.module.scss'
import SolutionCard from './SolutionCard'
import LightBulbIllustration from '@/components/illustrations/LightBulbIllustration'
import ThunderstormIllustration from '@/components/illustrations/ThunderstormIllustration'
import ConversationIllustration from '@/components/illustrations/ConversationIllustration'
import NextLink from 'next/link'

export default function SolutionSection() {
  return (
    <section id="solution" className={styles.section}>
      <SectionTitle
        title="Professionnel, fiable et transparent"
        subtitle="Une solution exhaustive pour vous offrir la paix d’esprit"
      />
      <div className={styles.cards_container}>
        <SolutionCard
          title="1. Commandez votre site"
          subtitle="Obtenez votre soumission en 24H-48H et commençons le processus de création immédiatement."
          img={<LightBulbIllustration />}
        />
        <SolutionCard
          title="2. Laissez-nous alimenter votre site"
          subtitle="Nous hébergeons votre site sur des serveurs fiables et nous gérons toutes les technicalités."
          img={<ThunderstormIllustration />}
        />
        <SolutionCard
          title="3. Maintenance régulière & support illimité"
          subtitle="Demandez-nous de modifer votre site gratuitement & dormez sur vos deux oreilles avec notre support continu."
          img={<ConversationIllustration />}
        />
      </div>
      <NextLink href="/#process" passHref legacyBehavior>
        <button type="button" className="btn btn-primary">
          En savoir plus
        </button>
      </NextLink>
    </section>
  )
}
