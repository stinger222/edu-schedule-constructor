class EmptyDay extends Error {
  name = "EmptyDay"

  constructor(message: string) {
    super(message)
  }
}

export default EmptyDay
