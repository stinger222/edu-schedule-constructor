class Warning extends Error {
  name = "Warning"

  constructor(message: string) {
    super(message)
  }
}

export default Warning
