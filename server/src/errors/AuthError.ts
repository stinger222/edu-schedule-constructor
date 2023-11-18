import CustomError from "./CustomError";

// Used when error occurred during login or registration
class AuthError extends CustomError {
  statusCode: number = 409
  notifyUser: boolean;

  constructor(message: string, notifyUser: boolean = false) {
    super(message)

    this.notifyUser = notifyUser
    Object.setPrototypeOf(this, AuthError.prototype)
  }
}

export default AuthError