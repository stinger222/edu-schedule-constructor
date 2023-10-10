import CustomError from "./CustomError";

class DatabaseError extends CustomError {
  statusCode: number = 500

  constructor(message: string) {
    super(message)

    Object.setPrototypeOf(this, DatabaseError.prototype)
  }
}

export default DatabaseError