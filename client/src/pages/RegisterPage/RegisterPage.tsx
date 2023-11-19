import { FormProvider, useForm } from "react-hook-form"
import { StyledRegisterPage } from "./RegisterPage.styled"
import { api } from "../../api"
import InputContainer from "../../components/containers/InputContainer/InputContainer"
import Container from "../../components/containers/Container/Container"
import Button from "../../components/ui/Button/Button"
import { validateField } from "../../core/utils/stringUtils"
import { useContext } from "react"
import { StoreContext } from "../.."
import { useNavigate } from "react-router-dom"
import { AxiosResponse } from "axios"


interface IFormData { login: string, password: string }

const RegisterPage = () => {
  const rootStore = useContext(StoreContext)
  const navigate = useNavigate()

  const methods = useForm<IFormData>({defaultValues: {
    login: "",
    password: ""
	}})

  const handleSubmit = (formData: IFormData) => {
    api
      .post("auth/register", formData)
      .then((response: AxiosResponse<{ jwt: string }>) => {
        console.log("User registrated and signed in!")
        
        rootStore.authStore.setJWT(response.data.jwt)
        rootStore.authStore.setSignedIn(true)

        rootStore.assembledSchedulesStore.restoreState()
        rootStore.classSchedulesStore.restoreState()
        rootStore.classesStore.restoreState()

        navigate("/")
      })
  }
  
  return (
    <StyledRegisterPage>
      <Container>
        <h1  style={{marginTop: "10em"}}>Register</h1>
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
    </StyledRegisterPage>
  )
}

export default RegisterPage