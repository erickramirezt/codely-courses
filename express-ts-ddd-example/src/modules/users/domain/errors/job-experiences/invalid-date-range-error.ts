import { BadRequestError } from '../../../../shared/domain/errors/bad-request-error'

export class InvalidDateRangeError extends BadRequestError {
	static message = 'La fecha de inicio no puede ser mayor a la fecha de fin'
	constructor() {
		super(InvalidDateRangeError.message)
	}
}
