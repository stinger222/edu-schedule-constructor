abstract class CustomError extends Error {
  abstract errorType: string

  constructor(message?: string) {
    super(message)

    Object.setPrototypeOf(this, CustomError.prototype)
  }
}

export default CustomError