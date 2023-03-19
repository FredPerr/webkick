import SectionTitle from '@/components/section/SectionTitle'
import styles from './QuoteSection.module.scss'
import { Button, Form } from 'react-bootstrap'
import NextImage from 'next/image'
import PlanetLargeSvg from '@/public/images/illustrations/planet-large.svg?url'
import PlanetSmallSvg from '@/public/images/illustrations/planet-small.svg?url'
import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import ReCAPTCHA from 'react-google-recaptcha'
import NextLink from 'next/link'

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Requis')
    .min(4, 'Vous devez entrer au moins 4 caractères.')
    .max(50, 'Vous devez entrer au plus 50 caractères.'),
  email: yup
    .string()
    .required('Requis')
    .email('Vous devez entrer une adresse courriel valide.'),
  tel: yup
    .string()
    .required('Requis')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Vous devez entrer un numéro de téléphone valide.',
    ),
  company: yup.string().max(50, 'Vous devez entrer au plus 50 caractères.'),
  message: yup
    .string()
    .required()
    .min(3, 'Veuillez décrire votre demande brièvement.')
    .max(500, 'Vous devez entrer au plus 500 caractères.'),
})

export default function QuoteSection() {
  const recaptchaRef = React.useRef<ReCAPTCHA>(null)
  const [transaction, setTransaction] = React.useState<
    'pending' | 'sent' | 'failed'
  >('pending')

  return (
    <section className={styles.section} id="soumission">
      <SectionTitle
        title="Envoyer une demande de soumission"
        subtitle="Nous analysons les demandes de soumission en 24H-48H"
        contrast
      />
      <Formik
        validationSchema={schema}
        initialValues={{
          name: '',
          email: '',
          tel: '',
          company: '',
          message: '',
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            recaptchaRef.current?.execute()
            fetch('/api/email', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            })
              .then((res) => {
                if (res.status === 200) {
                  setTransaction('sent')
                  console.table(values)
                } else {
                  setTransaction('failed')
                }
              })
              .catch((err) => {
                console.error(err)
                setTransaction('failed')
              })
            setSubmitting(false)
            resetForm()
          }, 400)
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate className={styles.form}>
            <Form.Group controlId="name">
              <Form.Control
                type="text"
                placeholder="Nom complet"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={touched.name && !errors.name}
              />
              <Form.Text aria-required className="text-muted" />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Control
                type="email"
                placeholder="Addresse courriel"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
              />
              <Form.Text aria-required className="text-muted" />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="tel">
              <Form.Control
                type="tel"
                placeholder="Numéro de téléphone"
                value={values.tel}
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={touched.tel && !errors.tel}
              />
              <Form.Text aria-required className="text-muted" />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.tel} f
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="company">
              <Form.Control
                type="text"
                placeholder="Entreprise représentée"
                value={values.company}
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={touched.company && !errors.company}
              />
              <Form.Text aria-required className="text-muted" />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.company}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              controlId="message"
              style={{ gridColumnEnd: 3, gridColumnStart: 1 }}
            >
              <Form.Control
                type="text"
                placeholder="Parlez-nous de votre projet ou posez-nous vos questions"
                value={values.message}
                onBlur={handleBlur}
                onChange={handleChange}
                as="textarea"
                isValid={touched.message && !errors.message}
                style={{ resize: 'none' }}
              />
              <Form.Text aria-required className="text-muted" />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>
            <div
              className={styles.buttons_container}
              style={{ gridColumnEnd: 3, gridColumnStart: 1 }}
            >
              <Button
                variant="secondary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault()
                  handleSubmit()
                }}
              >
                Envoyer ma demande
              </Button>
              <NextLink href="/contact" passHref>
                <Button variant="primary">Nous contacter autrement</Button>
              </NextLink>
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
              />
            </div>
          </Form>
        )}
      </Formik>
      <div
        className={styles.alert_container}
        style={{ display: transaction == 'pending' ? 'none' : 'flex' }}
      >
        <span>
          Message{' '}
          {transaction == 'failed' ? 'non envoyé' : 'envoyé avec succès'}{' '}
        </span>
        <Button
          variant="outline-primary"
          onClick={() => setTransaction('pending')}
        >
          Fermer
        </Button>
      </div>
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
