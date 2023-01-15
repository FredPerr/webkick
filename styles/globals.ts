import { createGlobalStyle } from 'styled-components'
import { BreakpointType } from './theme'

export default createGlobalStyle`
${(props) =>
  Object.keys(props.theme.breakpoints).map(
    (value) => `
            @media ${
              props.theme.media[value as BreakpointType]
            } { html { font-size: ${
      props.theme.fontSizes[value as BreakpointType]
    }px;}}
        `,
  )}
    }
`
