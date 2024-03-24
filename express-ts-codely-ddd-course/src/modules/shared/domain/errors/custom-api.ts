export class CustomApiError extends Error {
  constructor (
    readonly message: string,
    readonly statusCode: number
  ) {
    super(message)
    this.statusCode = statusCode
  }
}
