import CustomError from "./CustomError";

// Used when error occurred during login or registration
class AuthError extends CustomError {
  statusCode: number = 409

  constructor(message: string) {
    super(message)

    Object.setPrototypeOf(this, AuthError.prototype)
  }
}

export default AuthError