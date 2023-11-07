import { useContext, useEffect } from "react"
import { Trans, useTranslation } from "react-i18next"
import { useNavigate } from "react-router"
import { AxiosResponse } from "axios"
import jwtDecode from "jwt-decode"

import { api } from "../../api"
import { StoreContext } from "../.."
import { StyledSignInPage } from "./SignInPage.styled"
import Container from "../../components/containers/Container/Container"

const SignInPage = () => {
  const rootStore = useContext(StoreContext)
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const handleLogin = async (result: any, isFake: boolean = false) => {
    const email: string = isFake ? result : jwtDecode<any>(result.credential).email

    console.log("Decoded after login email: ", email)

    // const email: string = result.credential.email
    console.log("Trying to create session...")
    api
      .post("auth/sign-in", { email })
      .then((response: AxiosResponse<{ email: string }>) => {
        console.log("Session successfuly created! User signed-in!")
        rootStore.authStore.setSignedIn(true)

        rootStore.assembledSchedulesStore.restoreState()
        rootStore.classSchedulesStore.restoreState()
        rootStore.classesStore.restoreState()

        navigate("/")
      })
      .catch((err) => {
        console.error("Can't create session.\n", err.message)
      })
  }
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleLogin
    })

    window.google.accounts.id.renderButton(document.querySelector(".googleSignIn"), {
      size: "medium",
      theme: rootStore.uiStore.userSettings.theme === "dark" ? "filled_black" : "outline",
      locale: i18n.language
    })
  }, [])

  return (
    <StyledSignInPage>
      <Container>
        <h1> Schedule Constructor </h1>

        <div className="login-card">
          <h2>{t("signInPage.signInWith")} 
            <span> </span>
            <span className="g-blue">G</span>
            <span className="g-red">o</span>
            <span className="g-yellow">o</span>
            <span className="g-blue">g</span>
            <span className="g-green">l</span>
            <span className="g-red">e</span>
          </h2>
          <div className="googleSignIn"></div>
        </div>

        <div className="section-divider"></div>
        <p>
          <Trans i18nKey="signInPage.troubleshooting" components={{ br: <br/>, a: <a href="https://nothing-here-yet.coc" target="_blank" rel="noreferrer"></a> }}/>
        </p>
        <div className="section-divider"></div>
        <p>
          <Trans i18nKey="signInPage.sourceCodeAndDetails" components={{ br: <br/>, a: <a href="https://nothing-here-yet.coc" target="_blank" rel="noreferrer"></a> }}/>
        </p>

        <br/><br/><br/><br/><br/>
        <button onClick={() => {
          handleLogin("someFakeEmail2@gmail.dick", true)
        }}>FAKE LOGIN:</button>
      </Container>
    </StyledSignInPage>
  )
}
export default SignInPage
