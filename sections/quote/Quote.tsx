import StyledInput from '@/components/input/Input'
import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { FieldError, useForm } from 'react-hook-form'
import Button from '@/components/button'
import { useTranslation } from 'next-i18next'
import { useTheme } from 'styled-components'
import { StyledTextField } from '@/components/input'
import { useRouter } from 'next/router'
import WorldMapSvgUrl from '@/public/images/world-map.svg?url'

interface FormInputs {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

function Field({
  error,
  errorMsg,
  children,
}: {
  error: FieldError | undefined
  errorMsg: string
  children: React.ReactNode
}) {
  const theme = useTheme()
  return (
    <div css={{ position: 'relative' }}>
      {children}
      {error && (
        <span
          css={{
            color: theme.colors.error,
            fontSize: 12,
            position: 'absolute',
            bottom: -20,
          }}
        >
          {errorMsg}
        </span>
      )}
    </div>
  )
}

export default function Quote() {
  const { locale } = useRouter()
  const captchaRef = React.useRef<ReCAPTCHA>(null)
  const [captchaDone, setCaptchaDone] = React.useState(false)
  const [submitTried, setSubmitTried] = React.useState(false)
  const [successful, setSuccessful] = React.useState(false)
  const { t } = useTranslation('home')
  const theme = useTheme()
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({})

  const nameField = register('name', { required: true })
  const emailField = register('email', { required: true })
  const phoneField = register('phone', { required: true })
  const companyField = register('company', { required: true })
  const messageField = register('message', { required: true, minLength: 10 })

  const sendMessage = async (data: FormInputs) => {
    setSubmitTried(true)

    if (!captchaDone) {
      return null
    }

    await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(getValues()),
    }).then((res) => {
      if (res.status === 200) {
        setSuccessful(true)
        console.log(data)
        reset()
      } else {
        console.log(res.status)
      }
    })
  }

  return (
    <div
      id="quote"
      css={{
        display: 'flex',
        width: '100%',
        padding: '100px 5%',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        background: `url(${WorldMapSvgUrl}) no-repeat center center`,
      }}
    >
      <h3
        css={{
          textAlign: 'center',
          fontSize: 22,
          [theme.media.smMax]: { fontSize: 18 },
        }}
      >
        {t('home:quote.title')}
      </h3>
      <div css={{ paddingTop: 50 }}>
        <form
          onSubmit={handleSubmit((data) => sendMessage(data))}
          css={{
            position: 'relative',
            display: 'grid',
            gridTemplate: 'repeat(5, auto) / 50% 50%',
            gap: 30,
            [theme.media.smMax]: {
              gridTemplate: 'repeat(7, auto) / 100%',
            },
          }}
        >
          <Field error={errors.name} errorMsg={t('home:quote.form.name.error')}>
            <StyledInput
              placeholder={t('home:quote.form.name.name') || 'Name'}
              {...nameField}
            />
          </Field>
          <Field
            error={errors.email}
            errorMsg={t('home:quote.form.email.error')}
          >
            <StyledInput
              type="email"
              placeholder={
                t('home:quote.form.email.name') || 'Addresse courriel'
              }
              {...emailField}
            />
          </Field>
          <Field
            error={errors.phone}
            errorMsg={t('home:quote.form.phone.error')}
          >
            <StyledInput
              type="tel"
              placeholder={t('home:quote.form.phone.name') || 'Phone number'}
              {...phoneField}
            />
          </Field>
          <Field
            error={errors.company}
            errorMsg={t('home:quote.form.phone.error')}
          >
            <StyledInput
              placeholder={t('home:quote.form.company.name') || 'Entreprise'}
              {...companyField}
            />
          </Field>
          <div
            css={{
              gridColumnStart: 1,
              gridColumnEnd: 3,
              [theme.media.smMax]: { gridColumnEnd: 2 },
            }}
          >
            <Field
              error={errors.message}
              errorMsg={t('home:quote.form.message.error')}
            >
              <StyledTextField
                placeholder={
                  t('home:quote.form.message.name') ||
                  'Quelle est votre demande?'
                }
                rows={4}
                {...messageField}
              />
            </Field>
          </div>
          <div css={{ position: 'relative' }}>
            <ReCAPTCHA
              hl={locale}
              ref={captchaRef}
              sitekey="6LdnBOUjAAAAAEjUXCVfguwCZo5N8xAEqzLo19b6"
              onChange={(e) => {
                if (e && e.length > 0) setCaptchaDone(true)
              }}
            />
            {!captchaDone && submitTried && (
              <span
                css={{
                  fontSize: 12,
                  color: theme.colors.error,
                  position: 'absolute',
                  bottom: -20,
                }}
              >
                {t('home:quote.captcha')}
              </span>
            )}
          </div>
          <div
            css={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Button
              type="submit"
              arrow
              variant="contained"
              color="primary"
              css={{ height: 'min-content' }}
            >
              Envoyer
            </Button>
          </div>
          {successful && (
            <div
              css={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%,-50%)',
                padding: '4rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                width: '400px',
                borderRadius: '10px',
                boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
              }}
            >
              <h3 css={{ textAlign: 'center', marginBottom: '1rem' }}>
                {t('home:quote.success.title')}
              </h3>
              <p css={{ textAlign: 'center', marginBottom: '1rem' }}>
                {t('home:quote.success.description')}
              </p>
              <Button
                variant="outlined"
                color="success"
                onClick={(e) => {
                  setSuccessful(false)
                  setSubmitTried(false)
                  setCaptchaDone(false)
                  captchaRef.current?.reset()
                }}
              >
                Fermer
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
