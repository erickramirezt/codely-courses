import { BadRequestError } from '../../../shared/domain/errors/bad-request-error'

export class UserDoesNotExistError extends BadRequestError {
	// TODO: UPDATE MESSAGE TO STATIC PROPERTY
	message = `El usuario ${this.email} no existe`
	// TODO: DELETE EMAIL PROPERTY AND PASS STATIC MESSAGE TO SUPER
	constructor(readonly email: string) {
		super()
	}
}
