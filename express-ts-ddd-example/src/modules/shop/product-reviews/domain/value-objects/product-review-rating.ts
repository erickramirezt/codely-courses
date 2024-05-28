import { InvalidProductReviewRatingError } from '../errors/invalid-product-review-rating-error'

export class ProductReviewRating {
	constructor(readonly value: number) {
		this.validateProductReviewRating(value)
	}

	private validateProductReviewRating(value: number): void {
		if (value < 0 || value > 5) {
			throw new InvalidProductReviewRatingError(value)
		}
	}
}
