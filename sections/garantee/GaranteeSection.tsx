import SectionTitle from '@/components/section/SectionTitle'
import styles from './GaranteeSection.module.scss'
import { Button } from 'react-bootstrap'

export default function GaranteeSection() {
  return (
    <section className={styles.section}>
      <SectionTitle
        title="Notre garantie"
        subtitle="Payez seulement à la réception du site en 12 mois à 0% d’intérêts"
        contrast
      />
      <div>
        <p className={styles.text}>
          Ne payez pas tant que vous ne serez pas totalement satisfait de votre
          site. Nous le retoucherons tant que vous n’aurez pas approuvé le
          produit final.
        </p>
        <Button>Obtenir ma soumission</Button>
        <Button variant="secondary">Notre processus</Button>
      </div>
    </section>
  )
}
