import SectionTitle from '@/components/section/SectionTitle'
import styles from './SolutionSection.module.scss'

export default function SolutionSection() {
  return (
    <section className={styles.section}>
      <SectionTitle
        title="Professionnel, fiable et transparent"
        subtitle="Une solution exhaustive pour vous offrir la paix d’esprit"
      />
      <div></div>
    </section>
  )
}
