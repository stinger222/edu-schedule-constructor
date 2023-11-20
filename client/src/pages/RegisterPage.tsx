import { useForm } from "react-hook-form"

import Button from "../components/ui/Button/Button"
import AuthForm from "../components/smart/AuthForm/AuthForm"
import InputContainer from "../components/containers/InputContainer/InputContainer"

import { validateField } from "../core/utils/stringUtils"
import { AuthFormConfig } from "../core/types/types"
import { useTranslation } from "react-i18next"


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

      <InputContainer
         label={t("authForm.confirmPassword")}
        name="confirmPassword"
        type="password"
        rules={{validate: validateField, minLength: 8, maxLength: 64}}
      />

      <Button type="submit" disabled={(!methods.formState.isValid)}> {t("button.submit")} </Button>
    </AuthForm>
  )
}

export default RegisterPage
