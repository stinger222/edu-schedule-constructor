import CustomError from "./CustomError"

class UnknownError extends CustomError {
  statusCode: number = 500
  notifyUser: boolean

  constructor(message: string, notifyUser: boolean = false) {
    super(message)

    this.notifyUser = notifyUser
    Object.setPrototypeOf(this, UnknownError.prototype)
  }
}

export default UnknownError