import CustomError from "./CustomError";

class DatabaseError extends CustomError {
  statusCode: number = 500
  notifyUser: boolean;
  
  constructor(message: string, notifyUser: boolean = false) {
    super(message)
    this.notifyUser = notifyUser

    Object.setPrototypeOf(this, DatabaseError.prototype)
  }
}

export default DatabaseError