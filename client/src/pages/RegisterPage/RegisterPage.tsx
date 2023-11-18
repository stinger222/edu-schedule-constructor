import { FormProvider, useForm } from "react-hook-form"
import { StyledRegisterPage } from "./RegisterPage.styled"
import { api } from "../../api"
import InputContainer from "../../components/containers/InputContainer/InputContainer"
import Container from "../../components/containers/Container/Container"
import Button from "../../components/ui/Button/Button"

const RegisterPage = () => {

  interface IFormData { username: string, password: string }

  const methods = useForm<IFormData>({defaultValues: {
    username: "",
    password: ""
	}})

  const handleSubmit = (formData: IFormData) => {
    api
      .post("auth/register", formData)
      // .then("Restore all stores, stop loading and redirect to main")
  }
  
  return (
    <StyledRegisterPage>
      <Container>
        <h1  style={{marginTop: "10em"}}>Register</h1>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmit)} style={{width: "30em"}}>
            <InputContainer
              label="Username"
              name="username"
              />
            <InputContainer
              label="Password"
              name="password"
            />
            <Button type="submit">Submit</Button>
          </form>
        </FormProvider>
      </Container>
    </StyledRegisterPage>
  )
}

export default RegisterPage