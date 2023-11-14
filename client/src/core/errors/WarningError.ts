import CustomError from "./CustomError"

class Warning extends CustomError {
  errorType: string = "warning"

  constructor(message: string) {
    super(message)

    Object.setPrototypeOf(this, Warning.prototype)
  }
}

export default Warning