import { StyledTextField } from '@/components/input'
import StyledInput from '@/components/input/Input'
import StyledOption from '@/components/input/Option'
import StyledSelect from '@/components/input/Select'

export default function Quote() {
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
            gridTemplate: 'repeat(4, 1fr) / 50% 50%',
            gap: 30,
          }}
        >
          <StyledInput
            placeholder="Nom complet"
            required
            type="text"
            pattern="{3,}"
          />
          <StyledInput
            placeholder="Adresse courriel"
            required
            type="email"
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          />
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
              gridRowEnd: 3,
              gridColumnStart: 2,
              resize: 'none',
            }}
          />
          <div></div>
          <StyledSelect>
            <StyledOption>Demande de soumission</StyledOption>
            <StyledOption>Nous communiquer</StyledOption>
          </StyledSelect>
        </form>
      </div>
    </div>
  )
}
