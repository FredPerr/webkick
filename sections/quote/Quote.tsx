import Button from '@/components/button'
import { StyledTextField } from '@/components/input'
import StyledInput from '@/components/input/Input'
import StyledOption from '@/components/input/Option'
import StyledSelect from '@/components/input/Select'
import { useRouter } from 'next/router'
import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'

interface FormFields {
  name: string
  email: string
  company: string
  phone: string
}

const sendMail = (captchaRef: React.MutableRefObject<ReCAPTCHA>) => {
  const token = captchaRef.current.getValue()
  if (!token) {
    return {
      status: 'error',
      message: "Veuillez confirmer que vous n'êtes pas un robot",
    }
  }
  captchaRef.current.reset()

  fetch('/api/email', {
    method: 'POST',
    body: JSON.stringify({ name, company, email, phone, msg }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (res.status !== 200) {
        throw new Error('Could not send the email')
      }
      res.json().then((data) => {
        setSending(false)
        setSuccess(true)
      })
    })
    .catch((err) => {
      setSending(false)
      setError(true)
      console.log(err)
    })

  return {
    status: 'success',
    message: 'Votre message a bien été envoyé',
  }
}

export default function Quote() {
  const { locale } = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const captchaRef = React.useRef<ReCAPTCHA>(null)
  const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data)

  return (
    <div
      css={{
        display: 'flex',
        width: '100%',
        padding: '100px 15%',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h3 css={{ textAlign: 'center', fontSize: 24 }}>
        Demander votre soumission ou parlez-nous de vos idées de projets
      </h3>
      <div css={{ padding: 200 }}>
        <form
          method="post"
          css={{
            display: 'grid',
            gridTemplate: 'repeat(5, 1fr) / 50% 50%',
            gap: 30,
          }}
        >
          <StyledInput
            {...register('name', { required: true, minLength: 3 })}
            placeholder="Nom complet"
          />
          <StyledInput
            placeholder="Adresse courriel"
            required
            type="email"
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          />
          <StyledInput placeholder="# téléphone" required type="tel" />
          <StyledInput
            placeholder="Entreprise ou entité"
            required
            type="text"
          />
          <StyledTextField
            placeholder="Votre message"
            required
            css={{
              gridRowStart: 1,
              gridRowEnd: 4,
              gridColumnStart: 2,
              resize: 'none',
            }}
          />
          <div css={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <ReCAPTCHA
              hl={locale}
              ref={captchaRef}
              sitekey="6LdnBOUjAAAAAEjUXCVfguwCZo5N8xAEqzLo19b6"
            />
          </div>
          <StyledSelect>
            <StyledOption>Demande de soumission</StyledOption>
            <StyledOption>Nous communiquer</StyledOption>
          </StyledSelect>
          <div
            css={{
              height: 'min-content',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              arrow
              type="submit"
              onClick={() => {
                if (captchaRef.current) {
                  captchaRef.current.reset()
                }
              }}
            >
              Envoyer
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
