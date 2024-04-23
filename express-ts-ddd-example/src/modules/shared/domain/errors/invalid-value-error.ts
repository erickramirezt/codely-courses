import { BadRequestError } from './bad-request-error'

export class InvalidValueError extends BadRequestError {
	static message = 'El valor ingresado no es válido.'
	constructor() {
		super(InvalidValueError.message)
	}
}
