import { toast } from "sonner"
import { FormProvider, useForm } from "react-hook-form"

import { api } from "../../api"
import { StyledLoginPage } from "./LoginPage.styled"
import { validateField } from "../../core/utils/stringUtils"
import InputContainer from "../../components/containers/InputContainer/InputContainer"
import Container from "../../components/containers/Container/Container"
import Button from "../../components/ui/Button/Button"

const LogInPage = () => {

  interface IFormData { login: string, password: string }

  const methods = useForm<IFormData>({defaultValues: {
    login: "",
    password: ""
	}})

  const handleSubmit = (formData: IFormData) => {
    api
      .post("auth/login", formData)
      .then(() => {
        methods.reset()
      })
  }
  
  return (
    <StyledLoginPage>
      <Container>
        <h1  style={{marginTop: "10em"}}>Login</h1>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmit)} style={{width: "30em"}}>
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
            <Button
              type="submit"
              disabled={(!methods.formState.isValid)}
            >
              Submit
            </Button>
          </form>
        </FormProvider>
      </Container>
    </StyledLoginPage>
  )
}

export default LogInPage