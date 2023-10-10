import CustomError from "./CustomError"

class UnauthorizedError extends CustomError {
  statusCode: number = 401

  constructor(message: string) {
    super(message)

    Object.setPrototypeOf(this, UnauthorizedError.prototype)
  }
}

export default UnauthorizedError