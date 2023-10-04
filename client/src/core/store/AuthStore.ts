import ky from "ky"
import { makeAutoObservable } from "mobx"
import {Cookies } from "react-cookie"

class AuthStore {
  userEmail: string

	constructor() {
		makeAutoObservable(this)
    this.checkIfUserLoggedIn()
	}

  setUserEmail(email: string) {
    this.userEmail = email
  }

  async checkIfUserLoggedIn() {
    console.log("Trying sign-in user using stored session id...")

    try {
      const data = await ky.get("http://localhost:3001/auth/get-session", {
        credentials: "include"
      }).json() as {email: string}

      this.setUserEmail(data.email)

      console.log("User successfully signed-in using stored session id!")
      
    } catch(err) {
      console.log("Can't sign-in user: session has expired or doesn't exist")
    }
  }
}

export default AuthStore