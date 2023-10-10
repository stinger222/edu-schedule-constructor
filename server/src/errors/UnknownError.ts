import CustomError from "./CustomError"

class UnknownError extends CustomError {
  statusCode: number = 500

  constructor(message: string) {
    super(message)

    Object.setPrototypeOf(this, UnknownError.prototype)
  }
}

export default UnknownError