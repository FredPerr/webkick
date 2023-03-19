import { Button } from 'react-bootstrap'
import styles from './PricingHero.module.scss'
import Badge from 'react-bootstrap/Badge'
import NextLink from 'next/link'

export default function PricingHero() {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_container}>
        <h1 className={styles.title}>
          Gardez votre argent plus longtemps <br /> avec notre financement à 0%
          sur 12 mois.
        </h1>
        <div className={styles.grid_container}>
          <Badge bg="success" className={styles.card_badge}>
            Prix compétitifs
          </Badge>
          <Badge bg="primary" className={styles.card_title}>
            Site Vitrine
          </Badge>
          <p className={styles.card_paragraph}>
            Obtenez une page Web accueillante et optimisée pour que de nouveaux
            clients puissent vous rejoindre facilement et rapidement.
          </p>

          <hr />
          <span className={styles.card_initial_price}>12 mois à 51~98$/mo</span>
          <span className={styles.card_recurring_price}>
            payez ensuite ~17$/mo
          </span>
          <hr />
          <ul className={styles.card_list}>
            <li>Présentation exhaustive de vos produits et services</li>
            <li>Nom de domaine .ca et/ou .com</li>
            <li>Optimisations pour moteurs de recherches (SEO)</li>
            <li>Site et données sécurisées</li>
            <li>Certification SSL (https)</li>
            <li>Design intuitif et élégant</li>
            <li>Moyen de contact rapide</li>
            <li>Maintenance complète et support illimité</li>
            <li>Retouches illimitées</li>
            <li>Bande passante illimités</li>
          </ul>
          <div className={styles.card_buttons_container}>
            <NextLink href="/soumission">
              <Button variant="primary">Obtenir ma soumission</Button>
            </NextLink>
            <NextLink href="/contact">
              <Button variant="outline-primary">
                Demander plus d&apos;information
              </Button>
            </NextLink>
          </div>
        </div>
        <div className={styles.grid_container}>
          <Badge bg="secondary" className={styles.card_title}>
            Site Vitrine + Fonctionnalités
          </Badge>
          <p className={styles.card_paragraph}>
            Complétez l’offre <i>Vitrine</i> avec des fonctionnalités
            personnalisées. Faites des ventes en ligne, automatisez un processus
            redondant, offrez une interface interactive à vos clients pour la
            prise de rendez-vous, etc.
          </p>
          <hr />
          <p className={styles.card_quote_price}>
            Les frais sont calculés en fonction de la complexité de
            l’implémentation et du support.
          </p>
          <hr />
          <ul className={styles.card_card_list}>
            <li>Ouvrez votre boutique en ligne</li>
            <li>Automatisez un processus redondant</li>
            <li>Offrez une interface dynamique à vos clients</li>
            <li>Intégrez un service externe sur votre site Web</li>
            <li>Utiliser un service de messagerie intégrée</li>
          </ul>
          <div className={styles.card_buttons_container}>
            <NextLink href="/#soumission">
              <Button variant="secondary">Évaluer une fonctionnalité</Button>
            </NextLink>
            <NextLink href="/contact">
              <Button variant="outline-secondary">
                Demande plus d&apos;information
              </Button>
            </NextLink>
          </div>
        </div>
      </div>
    </section>
  )
}
