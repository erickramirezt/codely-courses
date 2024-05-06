import { StringValueObject } from '../../../shared/domain/value-objects/value-object/string-value-object'
import { InvalidUserEmailError } from '../errors/invalid-user-email-error'

export class UserEmail extends StringValueObject {
	constructor(readonly value: string) {
		super(value)
		this.validateUserEmail(value)
	}

	static isValid(value: string): boolean {
		const regexExp =
			/^(?=.*[@](?:gmail\.com|hotmail\.com)$)[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9_-]*$/

		return regexExp.test(value)
	}

	private validateUserEmail(value: string) {
		if (!UserEmail.isValid(value)) {
			throw new InvalidUserEmailError()
		}
	}
}
