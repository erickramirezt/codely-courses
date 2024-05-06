import { BadRequestError } from '../../../shared/domain/errors/bad-request-error'

export class InvalidUserEmailError extends BadRequestError {
	static message = 'El correo electrónico ingresado no es válido.'
	constructor() {
		super(InvalidUserEmailError.message)
	}
}
