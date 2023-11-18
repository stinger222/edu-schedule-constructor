abstract class CustomError extends Error {
  abstract statusCode: number
  abstract notifyUser: boolean // should error message be shown to user?

  constructor(message: string) {
    super(message)

    Object.setPrototypeOf(this, CustomError.prototype)
  }
}

export default CustomError