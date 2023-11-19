import { useForm } from "react-hook-form"

import Button from "../components/ui/Button/Button"
import AuthForm from "../components/smart/AuthForm/AuthForm"
import { StyledAuthForm } from "../components/smart/AuthForm/AuthForm.styled"
import InputContainer from "../components/containers/InputContainer/InputContainer"

import { validateField } from "../core/utils/stringUtils"
import { AuthFormConfig } from "../core/types/types"


interface IFormData { login: string, password: string }

const LogInPage = () => {
  const methods = useForm<IFormData>({defaultValues: {
    login: "",
    password: ""
	}})

  const formConfig: AuthFormConfig = {
    submitAPIEndpoing: "auth/login",
    formHeader: "Login"
  }
  
  return (
    <StyledAuthForm>
      <AuthForm methods={methods} formConfig={formConfig}>
        <InputContainer
          label="Username"
          name="login"
          rules={{validate: validateField, minLength: 5, maxLength: 30}}
        />
        <InputContainer
          label="Password"
          name="password"
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
    </StyledAuthForm>
    )
}

export default LogInPage