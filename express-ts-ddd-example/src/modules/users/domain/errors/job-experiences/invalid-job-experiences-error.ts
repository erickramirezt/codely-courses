import { BadRequestError } from '../../../../shared/domain/errors/bad-request-error'

export class InvalidJobExperiencesError extends BadRequestError {
	static message = 'Las experiencias laborales no pueden superponerse'
	constructor() {
		super(InvalidJobExperiencesError.message)
	}
}
