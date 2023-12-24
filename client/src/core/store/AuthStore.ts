import { AxiosResponse } from "axios"
import { makeAutoObservable } from "mobx"
import { IAuthStore } from "../types/store"
import { api } from "../../api"

class AuthStore implements IAuthStore {
  isSignedIn: null | boolean = null
  JWT: null | string = null
  static JWTLocalStorageKey: string = "jwt"

	constructor() {
		makeAutoObservable(this)
    this.restoreState()
    this.validateStoredJWT()
	}

  restoreState(): void {
    this.JWT = localStorage.getItem(AuthStore.JWTLocalStorageKey) || null
  }

  setSignedIn(isSignedIn: boolean) {
    this.isSignedIn = isSignedIn
  }

  setJWT(jwt: string) {
    this.JWT = jwt
    localStorage.setItem(AuthStore.JWTLocalStorageKey, jwt)
  }

  async validateStoredJWT() {
    if (import.meta.env.MODE === "test") return

    console.log("Trying sign-in user using stored jwt...")

    api
      .get("auth/validate-token")
      .then((response: AxiosResponse<{isSessionValid: boolean}>) => {
        this.setSignedIn(response.data?.isSessionValid || false)
        console.log("User successfully signed-in using stored jwt!")
      })
      .catch((err) => {
        this.setSignedIn(false)
        // console.warn("User not signed-in: token has expired or it was malformed")
        console.warn("User not signed in: ", err.message)
      })
  }

  signOut() {
    localStorage.removeItem(AuthStore.JWTLocalStorageKey)
    this.setSignedIn(false)
    document.location.reload()
  }
}

export default AuthStore