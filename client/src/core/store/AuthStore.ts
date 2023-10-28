import { makeAutoObservable } from "mobx"
import { Cookies } from "react-cookie"
import { IAuthStore } from "../types/store"
import { api } from "../../api"
import { AxiosResponse } from "axios"

class AuthStore implements IAuthStore {
  isSignedIn: null | boolean = null

	constructor() {
		makeAutoObservable(this)
    this.validateSession()
	}

  setSignedIn(isSignedIn: boolean) {
    this.isSignedIn = isSignedIn
  }

  async validateSession() {
    if (import.meta.env.MODE === "test") return

    console.log("Trying sign-in user using stored session id...")

    api
      .get("auth/validate-session")
      .then((response: AxiosResponse<{isSessionValid: boolean}>) => {
        this.setSignedIn(response.data.isSessionValid)
        console.log("User successfully signed-in using stored session id!")
      }).catch(() => {
        this.setSignedIn(false)
        console.warn("User not signed-in: session has expired or doesn't exist")
      })
  }

  signOut() {
    const cookies = new Cookies()
    cookies.remove("session_id")

    this.setSignedIn(false)
    document.location.reload()
  }
}

export default AuthStore