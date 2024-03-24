export class ProductReviewRatingNotValidError extends Error {
  constructor (value: number) {
    super(`Invalid product review rating: ${value}`)
  }
}
