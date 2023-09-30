export class DayOff extends Error {
  readonly name = "DayOff"

  constructor() {
    super()
  }
}

export class Warning extends Error {
  readonly name = "Warning"

  constructor(message: string) {
    super(message)
  }
}
