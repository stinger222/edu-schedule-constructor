import ky from "ky"
import { makeAutoObservable } from "mobx"
import { Cookies } from "react-cookie"
import { IAuthStore } from "../types/store"

class AuthStore implements IAuthStore {
  isSignedIn: boolean = false

	constructor() {
		makeAutoObservable(this)
    this.validateSession()
	}

  setSignedIn(isSignedIn: boolean) {
    this.isSignedIn = isSignedIn
  }

  async validateSession() {
    console.groupCollapsed("Trying to sign-in using cookie:")
    console.log("Trying sign-in user using stored session id...")

    try {
      // todo: move all api calls to DAL or something
      const data = await ky.get("http://localhost:3001/auth/validate-session", {
        credentials: "include"
      }).json() as {isSessionValid: boolean}
      
      this.setSignedIn(data.isSessionValid)
      console.log("User successfully signed-in using stored session id!")
      console.groupEnd()
      
    } catch(err) {
      console.warn("User not signed-in: session has expired or doesn't exist")
      console.groupEnd()
    }
  }

  signOut() {
    const cookies = new Cookies()
    cookies.remove("session_id")

    this.setSignedIn(false)
    document.location.reload()
  }
}

export default AuthStore