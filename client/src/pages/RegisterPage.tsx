import { useForm } from "react-hook-form"
import { Trans, useTranslation } from "react-i18next"

import GitHubIcon from  "../assets/icons/github.svg?react"

import Button from "../components/ui/Button/Button"
import AuthForm from "../components/smart/AuthForm/AuthForm"
import InputContainer from "../components/containers/InputContainer/InputContainer"

import { validateField } from "../core/utils/stringUtils"
import { AuthFormConfig } from "../core/types/types"
import { StyledAuthPage } from "../core/style/shared/AuthPage.styled"
import Container from "../components/containers/Container/Container"


interface IFormData { login: string, password: string, confirmPassword?: string }

const RegisterPage = () => {
  const { t } = useTranslation()

  const methods = useForm<IFormData>({defaultValues: {
    login: "",
    password: "",
    confirmPassword: ""
	}})

  const formConfig: AuthFormConfig = {
    submitAPIEndpoing: "auth/register",
    formHeader: t("authForm.registerHeader")
  }

  return (
    <Container>
      <StyledAuthPage>
        <AuthForm methods={ methods } formConfig={ formConfig }>
          <InputContainer
            label={t("authForm.username")}
            name="login"
            rules={{validate: validateField, minLength: 5, maxLength: 30}}
          />

          <InputContainer
            label={t("authForm.password")}
            name="password"
            type="password"
            rules={{validate: validateField, minLength: 8, maxLength: 64}}
          />

          <InputContainer
            label={t("authForm.confirmPassword")}
            name="confirmPassword"
            type="password"
            rules={{validate: validateField, minLength: 8, maxLength: 64}}
           />

          <Button type="submit" disabled={(!methods.formState.isValid)}> {t("button.submit")} </Button>
        </AuthForm>

        <div className="section-divider"></div>
                
        <p>
          <Trans i18nKey="signInPage.troubleshooting" components={{ br: <br/>, a: <a href="https://github.com/stinger222/edu-schedule-constructor/tree/main#usage" target="_blank" rel="noreferrer"></a> }}/>
        </p>
        <div className="section-divider"></div>
        <p>
          <Trans i18nKey="signInPage.sourceCodeAndDetails" components={{ br: <br/>, a: <a href="https://github.com/stinger222/edu-schedule-constructor" target="_blank" rel="noreferrer"></a> }}/>
          <br />
          <a href="https://github.com/stinger222/edu-schedule-constructor" target="_blank" rel="noreferrer">
            <GitHubIcon fill="black" className="gh-icon"/>
          </a>
        </p>
      </StyledAuthPage>
    </Container>
  )
}

export default RegisterPage
