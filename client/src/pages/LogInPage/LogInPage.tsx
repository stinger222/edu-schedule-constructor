import ky from "ky"
import { useContext, useEffect } from "react"
import { StoreContext } from "../.."
import { useNavigate } from "react-router"
import jwtDecode from "jwt-decode"

const LogInPage = () => {
  const { authStore } = useContext(StoreContext)
  const navigate = useNavigate()

  const handleLogin = async (result: any, isFake: boolean = false) => {
    const email: string = isFake ? result : jwtDecode<any>(result.credential).email
    
    console.log("Decoded after login email: ", email)
    
    // const email: string = result.credential.email
    console.log("Trying to create session...")

    try {
      // todo: move all api calls to DAL or something
      const data = await ky.post("http://localhost:3001/auth/sign-in", {
        json: { email },
        credentials: "include"
      }).json() as {email: string}
      
      console.log("Session successfully created! User singned-in!")
      authStore.setSignedIn(true)
      navigate("/")
    } catch(err) {
      console.error("Can't create session.\n", err.message)
    }
  }

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleLogin
    })

    window.google.accounts.id.renderButton(document.querySelector(".googleSignIn"), {theme: "outline", size: "large"})
  }, [])

  return (
    <div>
      <div className="googleSignIn"></div>
      <button onClick={() => {
        handleLogin("someFakeEmail@gmail.dick", true)
      }}>FAKE LOGIN:</button>
    </div>
  )
}

export default LogInPage