import { BadRequestError } from '../../../shared/domain/errors/bad-request-error'

export class InvalidCourseNameError extends BadRequestError {
	static message = 'El valor ingresado no es un nombre de curso válido.'
	constructor() {
		super(InvalidCourseNameError.message)
	}
}
