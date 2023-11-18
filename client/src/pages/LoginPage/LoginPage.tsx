import { FormProvider, useForm } from "react-hook-form"
import { StyledLoginPage } from "./LoginPage.styled"
import { api } from "../../api"
import InputContainer from "../../components/containers/InputContainer/InputContainer"
import Container from "../../components/containers/Container/Container"
import Button from "../../components/ui/Button/Button"

const LogInPage = () => {

  interface IFormData { username: string, password: string }

  const methods = useForm<IFormData>({defaultValues: {
    username: "",
    password: ""
	}})

  const handleSubmit = (formData: IFormData) => {
    api
      .post("auth/login", formData)
      .then(() => 1)
      .catch((err) => console.log("askdalksjdljkasdjklalkjd", err.response.data.message))
      // .then("Restore all stores, stop loading and redirect to main")
  }
  
  return (
    <StyledLoginPage>
      <Container>
        <h1  style={{marginTop: "10em"}}>Login</h1>
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
    </StyledLoginPage>
  )
}

export default LogInPage