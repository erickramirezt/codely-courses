import { BadRequestError } from '../../../../shared/domain/errors/bad-request-error'

export class InvalidProductReviewCommentError extends BadRequestError {
	constructor(value: string) {
		super(InvalidProductReviewCommentError.message({ value }))
	}

	static message(arg0: { value: string }): string | undefined {
		throw new Error('Method not implemented.')
	}
}
