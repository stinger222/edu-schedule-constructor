import CustomError from "./CustomError"

class DayOff extends CustomError {
  errorType: string = "day_off"

  constructor(message?: string) {
    super(message)

    Object.setPrototypeOf(this, DayOff.prototype)
  }
}

export default DayOff