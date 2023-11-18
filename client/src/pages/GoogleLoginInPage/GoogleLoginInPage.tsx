import { useContext, useEffect } from "react"
import { Trans, useTranslation } from "react-i18next"
import { useNavigate } from "react-router"
import { AxiosResponse } from "axios"
import jwtDecode from "jwt-decode"

import { api } from "../../api"
import { StoreContext } from "../.."
import { StyledGoogleLoginInPage } from "./GoogleLoginInPage.styled"
import Container from "../../components/containers/Container/Container"

const GoogleLoginInPage = () => {
  const rootStore = useContext(StoreContext)
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const __DEV__ = import.meta.env.DEV

  const handleLogin = async (result: any) => {
    const email: string =  jwtDecode<any>(result.credential).email

    console.log("Trying to login...")

    api
      .post("auth/sign-in", { email })
      .then((response: AxiosResponse<{ jwt: string }>) => {
        console.log("User signed-in!")
        
        rootStore.authStore.setJWT(response.data.jwt)
        rootStore.authStore.setSignedIn(true)

        rootStore.assembledSchedulesStore.restoreState()
        rootStore.classSchedulesStore.restoreState()
        rootStore.classesStore.restoreState()

        navigate("/")
      })
      .catch((err) => {
        console.error("Can't login:\n", err.message)
      })
  }

  const handleFakeLogin = async () => {
    const email: string = "someFakeEmail2@gmail.sock"

    console.log("Trying to login using fake email...")

    api
      .post("auth/sign-in", { email })
      .then((response: AxiosResponse<{ jwt: string }>) => {
        console.log("User signed-in using fake email!")
        
        rootStore.authStore.setJWT(response.data.jwt)
        rootStore.authStore.setSignedIn(true)

        rootStore.assembledSchedulesStore.restoreState()
        rootStore.classSchedulesStore.restoreState()
        rootStore.classesStore.restoreState()

        navigate("/")
      })
      .catch((err) => {
        console.error("Can't login with fake email:\n", err.message)
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
    <StyledGoogleLoginInPage>
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

        {
          __DEV__ && (
            <button onClick={() => {
              handleFakeLogin()
            }}>   Login Using Fake Email  </button>
          )
        }
        
      </Container>
    </StyledGoogleLoginInPage>
  )
}
export default GoogleLoginInPage
