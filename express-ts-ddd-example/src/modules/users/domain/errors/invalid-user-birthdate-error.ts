import { BadRequestError } from '../../../shared/domain/errors/bad-request-error'

export class InvalidUserBirthdateError extends BadRequestError {
	static message =
		'El cumpleaños ingresado debe ser de una persona mayor de 18 años y menor de 110 años.'

	constructor() {
		super(InvalidUserBirthdateError.message)
	}
}
