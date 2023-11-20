import { useForm } from "react-hook-form"

import Button from "../components/ui/Button/Button"
import AuthForm from "../components/smart/AuthForm/AuthForm"
import { StyledAuthForm } from "../components/smart/AuthForm/AuthForm.styled"
import InputContainer from "../components/containers/InputContainer/InputContainer"

import { validateField } from "../core/utils/stringUtils"
import { AuthFormConfig } from "../core/types/types"
import { useTranslation } from "react-i18next"


interface IFormData { login: string, password: string }

const LogInPage = () => {
  const { t } = useTranslation()

  const methods = useForm<IFormData>({defaultValues: {
    login: "",
    password: ""
	}})

  const formConfig: AuthFormConfig = {
    submitAPIEndpoing: "auth/login",
    formHeader: t("authForm.loginHeader")
  }
  
  return (
    <StyledAuthForm>
      <AuthForm methods={methods} formConfig={formConfig}>
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

        <Button type="submit" disabled={(!methods.formState.isValid)}> {t("button.submit")} </Button>
      </AuthForm>
    </StyledAuthForm>
    )
}

export default LogInPage