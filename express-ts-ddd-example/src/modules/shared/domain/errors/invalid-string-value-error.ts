import { BadRequestError } from './bad-request-error'

export class InvalidStringValueError extends BadRequestError {
	static message = 'El valor ingresado no es una cadena de texto válida.'
	constructor() {
		super(InvalidStringValueError.message)
	}
}
