import { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import jwtDecode from "jwt-decode"
import { AxiosResponse } from "axios"

import { StoreContext } from "../.."
import { api } from "../../api"
import Container from "../../components/containers/Container/Container"

import { StyledSignInPage } from "./SignInPage.styled"

const SignInPage = () => {
  const rootStore = useContext(StoreContext)
  const navigate = useNavigate()

  const handleLogin = async (result: any, isFake: boolean = false) => {
    
    const email: string = isFake ? result : jwtDecode<any>(result.credential).email
    
    console.log("Decoded after login email: ", email)
    
    // const email: string = result.credential.email
    console.log("Trying to create session...")

      api
        .post("auth/sign-in", { email })
        .then((response: AxiosResponse<{email: string}>) => {
          console.log("Session successfuly created! User signed-in!")
          rootStore.authStore.setSignedIn(true)
    
          rootStore.assembledSchedulesStore.restoreState()
          rootStore.classSchedulesStore.restoreState()
          rootStore.classesStore.restoreState()
          
          navigate("/")
        })
        .catch(err => {
          console.error("Can't create session.\n", err.message)
        })


    // try {
    //   await api.post("auth/sign-in", {
    //     json: { email },
    //     credentials: "include"
    //   })
    //   // .json() as { email: string }
      
    //   console.log("Session successfully created! User singned-in!")
    //   rootStore.authStore.setSignedIn(true)

    //   rootStore.assembledSchedulesStore.restoreState()
    //   rootStore.classSchedulesStore.restoreState()
    //   rootStore.classesStore.restoreState()
      
    //   navigate("/")
    // } catch(err) {
    //   console.error("Can't create session.\n", err.message)
    // }
  }

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleLogin
    })

    window.google.accounts.id.renderButton(document.querySelector(".googleSignIn"), {
      size: "medium", locale: "ru_RU"
    })
  }, [])

  return (
    <StyledSignInPage>
      <Container>
        <h1> Schedule Constructor </h1>

        <div className="login-card">
          <h2>Войдите с помощью 
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
        <p>Если возникнут трудности, то можете <br /> ознакомиться с гайдом нажав <a href="https://google.com" target="_blank" rel="noreferrer">сюда</a>, или используя <br /> кнопку в меню</p>
        <div className="section-divider"></div>
        <p>Исходный код приложения, более подробное <br /> описание фич и информация об авторе доступны на <br /> <a href="https://google.com" target="_blank" rel="noreferrer">GitHub</a></p>

        <br/><br/><br/><br/><br/>
        <button onClick={() => {
          handleLogin("someFakeEmail2@gmail.dick", true)
        }}>FAKE LOGIN:</button>
      </Container>
    </StyledSignInPage>
  )
}

export default SignInPage
