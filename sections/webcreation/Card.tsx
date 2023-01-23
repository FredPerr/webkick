import { useTheme } from 'styled-components'

interface CardProps {
  title: string
  includes: string[]
  icon: React.ReactNode
  addon?: React.ReactNode
}

export default function Card(props: CardProps) {
  const theme = useTheme()
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        columnGap: 60,
        '& > svg': {
          height: 100,
          width: 100,
        },
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 30,
        boxShadow: '0 5px 10px rgba(0,0,0,0.05)',
        margin: 20,
        alignItems: 'center',
      }}
    >
      {props.icon}
      <h4
        css={{
          fontWeight: 500,
          fontSize: theme.fontSizes.xl,
          marginTop: 15,
          marginBottom: 15,
        }}
      >
        {props.title}
      </h4>
      <div
        css={{
          width: '100%',
          paddingLeft: '8%',
          paddingRight: '8%',
          marginTop: 20,
        }}
      >
        <ul
          css={{
            '& li:before': {
              content: '',
              display: 'inline-block',
              margin: '0 7px 0 -18px',
              width: '11px',
              height: '10px',
              background:
                'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMSAxMCI+PHBhdGggZD0iTTkuOC4yTDMuMyA2LjlsLTEuOC0yQy44IDQuMi0uNCA1IC4xIDZsMi4xIDMuNWMuMy40IDEuMS45IDEuOSAwIC4zLS40IDYuNi04LjMgNi42LTguMy44LS44LS4yLTEuNi0uOS0xeiIgZmlsbD0iIzZiN2M5MyIvPjwvc3ZnPg==)',
            },
            fontSize: theme.fontSizes.lg,
            listStyle: 'none',
          }}
        >
          {props.includes.map((include) => (
            <li css={{ color: theme.colors.text, marginBottom: 5 }}>
              <svg viewBox="0 0 512 512" width={10} style={{ marginRight: 10 }}>
                <g>
                  <path
                    d="M469.402,35.492C334.09,110.664,197.114,324.5,197.114,324.5L73.509,184.176L0,254.336l178.732,222.172
		l65.15-2.504C327.414,223.414,512,55.539,512,55.539L469.402,35.492z"
                    fill={theme.colors.text}
                  />
                </g>
              </svg>
              {include}
            </li>
          ))}
        </ul>
        {props.addon}
      </div>
    </div>
  )
}
