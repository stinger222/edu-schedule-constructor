import CustomError from "./CustomError"

class UnauthorizedError extends CustomError {
  statusCode: number = 401
  notifyUser: boolean;

  constructor(message: string, notifyUser: boolean = false) {
    super(message)

    this.notifyUser = notifyUser
    Object.setPrototypeOf(this, UnauthorizedError.prototype)
  }
}

export default UnauthorizedError