import { useTheme } from 'styled-components'

interface CardProps {
  title: string
  description: string
  image: React.ReactNode
}

export default function Card(props: CardProps) {
  const theme = useTheme()
  return (
    <div
      css={{
        display: 'grid',
        alignItems: 'center',
        gridTemplate: '20px 40px / 30px auto',
        backgroundColor: theme.colors.background,
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        padding: 10,
        columnGap: 10,
      }}
    >
      <div
        css={{
          gridRowStart: 1,
          gridRowEnd: 3,
          justifySelf: 'center',
          '& svg': { width: 40, height: 40, padding: 5 },
        }}
      >
        {props.image}
      </div>
      <div css={{ gridColumn: '2 / 2', gridRow: '1 / 1', alignSelf: 'end' }}>
        <h4
          css={{ fontSize: theme.fontSizes.md, color: theme.colors.textDark }}
        >
          {props.title}
        </h4>
      </div>
      <div css={{ gridColumn: '2 / 2', gridRow: '2 / 2' }}>
        <p
          css={{
            fontSize: theme.fontSizes.sm,
            fontWeight: 500,
            color: theme.colors.text,
            letterSpacing: '.5px',
          }}
        >
          {props.description}
        </p>
      </div>
    </div>
  )
}
