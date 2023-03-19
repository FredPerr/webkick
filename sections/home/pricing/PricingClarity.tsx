import NextLink from 'next/link'
import SectionTitle from '@/components/section/SectionTitle'
import styles from './PricingClarity.module.scss'
import { Button } from 'react-bootstrap'

export default function ReassureClarity() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionTitle
          contrast
          title="Nous vous guiderons à tout moment"
          subtitle="Analysons votre situation et prenons une décision éclairée"
        />
        <p>
          Vous ne savez pas quel plan choisir ou vous cherchez ce qui est le
          plus avantageux pour vous? Consultez nous pour analyser la situation
          de votre entreprise ensemble pour vous offrir un service adapté à vos
          besoins.
        </p>
        <div className={styles.buttons_container}>
          <NextLink href="/contact" passHref>
            <Button variant="secondary">Nous contacter</Button>
          </NextLink>
          <NextLink href="/#quote">
            <Button variant="primary">Évaluer mon idée de projet</Button>
          </NextLink>
        </div>
      </div>
    </section>
  )
}
