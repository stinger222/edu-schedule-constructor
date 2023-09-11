import { ITheme } from "../types/styled"
declare module "styled-components" {
  export interface DefaultTheme extends ITheme {
    type: ThemeEnum
  }
}