import type { ThemeType } from '@/styles/theme'
import {} from 'styled-components/cssprop'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
  {
  }
}
