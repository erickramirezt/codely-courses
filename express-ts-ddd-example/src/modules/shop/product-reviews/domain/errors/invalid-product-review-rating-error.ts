import { BadRequestError } from '../../../../shared/domain/errors/bad-request-error'

export class InvalidProductReviewRatingError extends BadRequestError {
	constructor(value: number) {
		super(InvalidProductReviewRatingError.message({ value }))
	}

	static message(props: { value: number }): string {
		return `El valor ingresado [${props.value}] no es una calificación de reseña de producto válida.`
	}
}
