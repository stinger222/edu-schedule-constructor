import { INewTheme } from "../types/styled"
declare module "styled-components" {
  export interface DefaultTheme extends INewTheme {
    type: ThemeEnum
  }
}