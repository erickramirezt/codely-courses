export class ProductNotExistError extends Error {
  constructor (id: string) {
    super(`Product with id ${id} does not exist`)
  }
}
