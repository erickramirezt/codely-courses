import { BadRequestError } from '../../../shared/domain/errors/bad-request-error'
import { DateValueObject } from '../../../shared/domain/value-objects/value-object/date-value-object'
import { Generation, GenerationName } from './generation/generation'

export class UserBirthdate extends DateValueObject {
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

		if (ageInYears < 18 || ageInYears > 110) {
			throw new BadRequestError('El cumpleaños ingresado no es válido.')
		}
	}
}
