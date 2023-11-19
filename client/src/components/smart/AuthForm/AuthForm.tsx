import { useContext, ReactNode } from "react"
import { AxiosResponse } from "axios"
import { useNavigate } from "react-router-dom"
import { FormProvider, UseFormReturn } from "react-hook-form"

import { api } from "../../../api"
import { StoreContext } from "../../.."
import { StyledAuthForm } from "./AuthForm.styled"
import { AuthFormConfig } from "../../../core/types/types"
import Container from "../../containers/Container/Container"


interface IFormData { login: string, password: string }

interface IProps {
  methods: UseFormReturn<IFormData>,
  formConfig: AuthFormConfig,
  children: ReactNode
}

const AuthForm = ({ methods, formConfig, children }: IProps) => {
  const rootStore = useContext(StoreContext)
  const navigate = useNavigate()

  const handleSubmit = (formData: IFormData) => {
    api
      .post(formConfig.submitAPIEndpoing, formData)
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
    <StyledAuthForm>
      <Container>
        <h1  style={{marginTop: "10em"}}>{formConfig.formHeader}</h1>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmit)} style={{width: "30em"}}>
            { children }
          </form>
        </FormProvider>
      </Container>
    </StyledAuthForm>
  )
}

export default AuthForm