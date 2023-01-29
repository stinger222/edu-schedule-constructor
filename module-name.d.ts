import { ITheme } from './src/core/types/styled'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}