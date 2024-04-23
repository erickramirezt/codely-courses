import { InternalServerError } from './internal-server-error'

export class InvalidUuidError extends InternalServerError {
	static message = 'El valor ingresado no es un UUID válido.'
	constructor() {
		super(InvalidUuidError.message)
	}
}
