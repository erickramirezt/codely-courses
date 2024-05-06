import { BadRequestError } from '../../../../shared/domain/errors/bad-request-error'

export class InvalidStartDateError extends BadRequestError {
	static message = 'La fecha de inicio no puede ser mayor a la fecha actual.'
	constructor() {
		super(InvalidStartDateError.message)
	}
}
