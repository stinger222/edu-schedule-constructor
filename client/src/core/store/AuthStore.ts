import ky from "ky"
import { makeAutoObservable } from "mobx"
import { Cookies } from "react-cookie"
import { IAuthStore } from "../types/store"

class AuthStore implements IAuthStore {
  userEmail: string | null = null

	constructor() {
		makeAutoObservable(this)
    this.checkIfUserLoggedIn()
	}

  setUserEmail(email: string) {
    this.userEmail = email
  }

  async checkIfUserLoggedIn() {
    console.groupCollapsed("Trying to sign-in using cookie:")
    console.log("Trying sign-in user using stored session id...")

    try {
      const data = await ky.get("http://localhost:3001/auth/get-session", {
        credentials: "include"
      }).json() as {email: string}

      this.setUserEmail(data.email)
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

    this.userEmail = null
    document.location = "/"
  }
}

export default AuthStore