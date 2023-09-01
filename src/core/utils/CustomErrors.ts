export class EmptyDay extends Error {
  readonly name = "EmptyDay"

  constructor(message: string) {
    super(message)
  }
}

export class Warning extends Error {
  readonly name = "Warning"

  constructor(message: string) {
    super(message)
  }
}
