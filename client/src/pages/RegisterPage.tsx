import { useForm } from "react-hook-form"

import Button from "../components/ui/Button/Button"
import AuthForm from "../components/smart/AuthForm/AuthForm"
import InputContainer from "../components/containers/InputContainer/InputContainer"

import { validateField } from "../core/utils/stringUtils"
import { AuthFormConfig } from "../core/types/types"
import { useRef } from "react"


interface IFormData { login: string, password: string, confirmPassword?: string }

const RegisterPage = () => {
  const methods = useForm<IFormData>({defaultValues: {
    login: "",
    password: "",
    confirmPassword: ""
	}})

  const formConfig: AuthFormConfig = {
    submitAPIEndpoing: "auth/register",
    formHeader: "Register"
  }

  return (
    <AuthForm methods={methods} formConfig={formConfig}>
      <InputContainer
        label="Login"
        name="login"
        rules={{validate: validateField, minLength: 5, maxLength: 30}}
      />
      <InputContainer
        label="Password"
        name="password"
        type="password"
        rules={{validate: validateField, minLength: 8, maxLength: 64}}
      />
      <InputContainer
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        rules={{validate: validateField, minLength: 8, maxLength: 64}}
      />
      <Button
        type="submit"
        disabled={(!methods.formState.isValid)}
      >
        Submit
      </Button>
    </AuthForm>
  )
}

export default RegisterPage
