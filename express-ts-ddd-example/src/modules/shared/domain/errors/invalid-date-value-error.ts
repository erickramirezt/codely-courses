export class InvalidDateValueError extends Error {
	static message = 'El valor ingresado no es una fecha válida.'

	constructor() {
		super(InvalidDateValueError.message)
	}
}
