import { ProductReviewRatingNotValidError } from '../errors/product-review-rating-not-valid-error'

export class ProductReviewRating {
  constructor (readonly value: number) {
    this.validateProductReviewRating(value)
  }

  private validateProductReviewRating (value: number): void {
    if (value < 0 || value > 5) {
      throw new ProductReviewRatingNotValidError(value)
    }
  }
}
