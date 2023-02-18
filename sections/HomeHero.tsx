import styles from './HomeHero.module.scss'
import HeroImage from './HeroImage'
import { Button } from 'react-bootstrap'
import NextLink from 'next/link'

export default function HomeHero() {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_container}>
        <div className={styles.hero_text_container}>
          <h1>
            Propulsez votre
            <br /> entreprise avec
            <br /> un site Web <br />
            adapté!
          </h1>
          <p>
            Débloquez le plein potentiel de votre entreprise! Un site Web
            professionnel adapté à vos besoins est la clé pour améliorer votre
            visibilité, votre crédibilité et vos ventes.
          </p>

          <div className={styles.links_container}>
            <NextLink href="#">
              <Button variant="primary">Explorer notre solution</Button>
            </NextLink>
            <NextLink href="/contact">
              <Button variant="outline-primary">Nous contacter</Button>
            </NextLink>
          </div>
        </div>
        <div className={styles.hero_img_container}>
          <HeroImage />
        </div>
      </div>
    </section>
  )
}
