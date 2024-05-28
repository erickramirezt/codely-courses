import { BadRequestError } from '../../../../shared/domain/errors/bad-request-error'

export class InvalidProductReviewCommentError extends BadRequestError {
	constructor(value: string) {
		super(InvalidProductReviewCommentError.message({ value }))
	}

	static message(props: { value: string }): string {
		return `El valor ingresado [${props.value}] no es una reseña de producto válida.`
	}
}
