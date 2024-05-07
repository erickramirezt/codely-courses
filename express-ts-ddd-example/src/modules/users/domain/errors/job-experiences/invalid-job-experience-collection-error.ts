import { BadRequestError } from '../../../../shared/domain/errors/bad-request-error'

export class InvalidJobExperienceCollectionError extends BadRequestError {
	static message = 'Las experiencias laborales no pueden superponerse'
	constructor() {
		super(InvalidJobExperienceCollectionError.message)
	}
}
