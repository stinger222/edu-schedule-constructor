import { useContext, ReactNode } from "react"
import { toast } from "sonner"
import { AxiosResponse } from "axios"
import { useNavigate } from "react-router-dom"
import { FormProvider, UseFormReturn } from "react-hook-form"

import { api } from "../../../api"
import { StoreContext } from "../../.."
import { StyledAuthForm } from "./AuthForm.styled"
import { AuthFormConfig } from "../../../core/types/types"

interface IFormData { login: string, password: string, confirmPassword?: string }

interface IProps {
  methods: UseFormReturn<IFormData>,
  formConfig: AuthFormConfig,
  children: ReactNode
}

const AuthForm = ({ methods, formConfig, children }: IProps) => {
  const rootStore = useContext(StoreContext)
  const navigate = useNavigate()

  const handleSubmit = (formData: IFormData) => {
    if (formData.confirmPassword && formData.confirmPassword !== formData.password) {
      toast.error("Passwords doesn't match!")
      return
    }

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
    <StyledAuthForm className="auth-form">
      <h1>Schedule Constructor</h1>
      
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <h2>{formConfig.formHeader}</h2>
          { children }
        </form>
      </FormProvider>
    </StyledAuthForm>
  )
}

export default AuthForm
