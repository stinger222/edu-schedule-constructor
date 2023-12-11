import { makeAutoObservable } from "mobx"
import { IAuthStore } from "../../types/store"

class MockAuthStore implements IAuthStore {
  isSignedIn: null | boolean = true
  JWT: null | string = "?.??.???"

  static JWTLocalStorageKey: string = "mock-jwt"

	constructor() {
		makeAutoObservable(this)
	}

  restoreState = vi.fn()
  setSignedIn = vi.fn()
  setJWT = vi.fn()
  validateStoredJWT = vi.fn().mockReturnValue(Promise.resolve())
  signOut = vi.fn()
}

export default MockAuthStore