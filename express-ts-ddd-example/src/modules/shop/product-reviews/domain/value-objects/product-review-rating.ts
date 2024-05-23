export class ProductReviewRating {
	constructor(readonly value: number) {
		this.validateProductReviewRating(value)
	}

	private validateProductReviewRating(value: number): void {
		if (value < 0 || value > 5) {
			// TODO: CREATE CUSTOM INVALID ERROR
			throw new Error(value.toString())
		}
	}
}
