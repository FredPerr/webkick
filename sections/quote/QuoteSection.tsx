import SectionTitle from '@/components/section/SectionTitle'
import styles from './QuoteSection.module.scss'
import { Button, Form } from 'react-bootstrap'
import NextImage from 'next/image'
import PlanetLargeSvg from '@/public/images/illustrations/planet-large.svg?url'
import PlanetSmallSvg from '@/public/images/illustrations/planet-small.svg?url'

export default function QuoteSection() {
  return (
    <section className={styles.section}>
      <SectionTitle
        title="Envoyer une demande de soumission"
        subtitle="Nous analysons les demandes de soumission en 24H-48H"
        contrast
      />
      <Form className={styles.form}>
        <Form.Group controlId="name">
          <Form.Control type="text" placeholder="Nom complet" />
          <Form.Text aria-required className="text-muted" />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Control type="email" placeholder="Addresse courriel" />
          <Form.Text aria-required className="text-muted" />
        </Form.Group>
        <Form.Group controlId="tel">
          <Form.Control type="tel" placeholder="Téléphone" />
          <Form.Text aria-required className="text-muted" />
        </Form.Group>
        <Form.Group controlId="company">
          <Form.Control type="text" placeholder="Entreprise représentée" />
          <Form.Text className="text-muted" />
        </Form.Group>
        <Form.Group
          controlId="message"
          style={{ gridColumnEnd: 3, gridColumnStart: 1 }}
        >
          <Form.Control
            type="text"
            as="textarea"
            rows={5}
            placeholder="Parlez-nous de votre projet ou posez-nous vos questions"
            style={{ resize: 'none' }}
          />
          <Form.Text className="text-muted" />
        </Form.Group>
        <div
          className={styles.buttons_container}
          style={{ gridColumnEnd: 3, gridColumnStart: 1 }}
        >
          <Button variant="secondary" type="submit">
            Envoyer ma demande
          </Button>
          <Button variant="primary" type="submit">
            Nous contacter autrement
          </Button>
        </div>
      </Form>
      <NextImage
        className={styles.planet_large}
        src={PlanetLargeSvg}
        height={100}
        width={100}
        alt="planet large decoration"
      />
      <NextImage
        className={styles.planet_small}
        src={PlanetSmallSvg}
        height={100}
        width={100}
        alt="planet small decoration"
      />
    </section>
  )
}
