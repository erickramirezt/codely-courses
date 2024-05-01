import { BadRequestError } from '../../../shared/domain/errors/bad-request-error'
import { StringValueObject } from '../../../shared/domain/value-objects/value-object/string-value-object'

export class UserEmail extends StringValueObject {
	constructor(readonly value: string) {
		super(value)
		this.validateUserEmail(value)
	}

	// TODO: CREATE IS VALID STATIC METHOD

	private validateUserEmail(value: string) {
		const regexExp =
			/^(?=.*[@](?:gmail\.com|hotmail\.com)$)[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9_-]*$/

		// TODO: USE IS VALID STATIC METHOD
		if (!regexExp.test(value)) {
			// TODO: CREATE INVALID EMAIL ERROR
			throw new BadRequestError('El correo electrónico ingresado no es válido.')
		}
	}
}
