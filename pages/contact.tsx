import { DefaultLayout } from 'layouts'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styles from './Contact.module.scss'
import { Button, Form } from 'react-bootstrap'
import Image from 'next/image'
import * as yup from 'yup'
import { Formik } from 'formik'
import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import quoteStyles from '@/sections/home/quote/QuoteSection.module.scss'

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

export default function Contact() {
  const recaptchaRef = React.useRef<ReCAPTCHA>(null)
  const [transaction, setTransaction] = React.useState<
    'pending' | 'sent' | 'failed'
  >('pending')

  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_container}>
        <h1 className={styles.title}>Contacter-nous rapidement</h1>
        <hr className={styles.ruler} />
        <div className={styles.buttons_grid}>
          <Image
            src="/images/contact/mail.png"
            alt="Email"
            width={50}
            height={50}
            className={styles.image}
          />
          <Button className={quoteStyles.button}>
            {process.env.NEXT_PUBLIC_EMAIL}
          </Button>
          <Image
            src="/images/contact/messenger.png"
            alt="Messenger"
            width={40}
            height={40}
            className={styles.image}
          />
          <Button variant="secondary" className={quoteStyles.button}>
            Utiliser Messenger / Facebook
          </Button>
        </div>
        <hr className={styles.ruler} />
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
              fetch('/api/contact', {
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
            <Form noValidate className={quoteStyles.form}>
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
                  placeholder="Écrire votre message ici"
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
                className={quoteStyles.buttons_container}
                style={{ gridColumnEnd: 3, gridColumnStart: 1 }}
              >
                <Button
                  variant="secondary"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault()
                    handleSubmit()
                  }}
                  className={quoteStyles.button}
                >
                  Envoyer mon message
                </Button>

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
          className={quoteStyles.alert_container}
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
      </div>
    </section>
  )
}

Contact.PageLayout = function PageLayout(page: React.ReactElement) {
  return <DefaultLayout pageName="contact">{page}</DefaultLayout>
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact'])),
    },
  }
}
