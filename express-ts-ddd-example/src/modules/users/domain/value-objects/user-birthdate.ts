import { DateValueObject } from '../../../shared/domain/value-objects/value-object/date-value-object'
import { InvalidUserBirthdateError } from '../errors/invalid-user-birthdate-error'
import { Generation, GenerationName } from './generation/generation'

export class UserBirthdate extends DateValueObject {
	static minimumAge = 18
	static maximumAge = 110

	constructor(readonly value: Date) {
		super(value)
		this.validateUserBirthdate(value)
	}

	generation(): GenerationName {
		return Generation.from(this.value)
	}

	private validateUserBirthdate(value: Date) {
		const currentDate = new Date()
		let ageInYears = currentDate.getFullYear() - value.getFullYear()

		if (
			currentDate.getMonth() < value.getMonth() ||
			(currentDate.getMonth() === value.getMonth() && currentDate.getDate() < value.getDate())
		) {
			ageInYears--
		}

		if (ageInYears < UserBirthdate.minimumAge || ageInYears > UserBirthdate.maximumAge) {
			throw new InvalidUserBirthdateError()
		}
	}
}
