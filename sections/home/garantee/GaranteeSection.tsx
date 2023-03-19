import NextLink from 'next/link'
import SectionTitle from '@/components/section/SectionTitle'
import styles from './GaranteeSection.module.scss'
import { Button } from 'react-bootstrap'
import MoonAndTelescope from '@/components/illustrations/MoonAndTelescope'

export default function GaranteeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionTitle
          title="Notre garantie"
          subtitle="Payez seulement à la réception du site en 12 mois à 0% d’intérêts"
          contrast
        />
        <p className={styles.text}>
          Ne payez pas tant que vous ne serez pas totalement satisfait de votre
          site. Nous le retoucherons tant que vous n’aurez pas approuvé le
          produit final.
        </p>
        <div className={styles.btn_container}>
          <NextLink href="/#soumission" legacyBehavior>
            <Button>Obtenir ma soumission</Button>
          </NextLink>
          <NextLink href="/#processus">
            <Button variant="secondary">Notre processus</Button>
          </NextLink>
        </div>
      </div>
      <MoonAndTelescope className={styles.illustration} />
    </section>
  )
}
