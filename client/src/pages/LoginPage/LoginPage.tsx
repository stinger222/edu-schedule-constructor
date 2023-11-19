import { useContext } from "react"
import { FormProvider, useForm } from "react-hook-form"

import { api } from "../../api"
import { StyledLoginPage } from "./LoginPage.styled"
import { validateField } from "../../core/utils/stringUtils"
import InputContainer from "../../components/containers/InputContainer/InputContainer"
import Container from "../../components/containers/Container/Container"
import Button from "../../components/ui/Button/Button"
import { StoreContext } from "../.."
import { AxiosResponse } from "axios"
import { useNavigate } from "react-router-dom"

interface IFormData { login: string, password: string }


const LogInPage = () => {
  const rootStore = useContext(StoreContext)
  const navigate = useNavigate()

  const methods = useForm<IFormData>({defaultValues: {
    login: "",
    password: ""
	}})

  const handleSubmit = (formData: IFormData) => {
    api
      .post("auth/login", formData)
      .then((response: AxiosResponse<{ jwt: string }>) => {
        console.log("User signed in!")
        
        rootStore.authStore.setJWT(response.data.jwt)
        rootStore.authStore.setSignedIn(true)

        rootStore.assembledSchedulesStore.restoreState()
        rootStore.classSchedulesStore.restoreState()
        rootStore.classesStore.restoreState()

        navigate("/")
      })
  }
  
  return (
    <StyledLoginPage>
      <Container>
        <h1  style={{marginTop: "10em"}}>Login</h1>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmit)} style={{width: "30em"}}>
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
          </form>
        </FormProvider>
      </Container>
    </StyledLoginPage>
  )
}

export default LogInPage