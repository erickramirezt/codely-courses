import { DateValueObject } from '../../../../shared/domain/value-objects/value-object/date-value-object'
import { InvalidStartDateError } from '../../errors/job-experiences/invalid-start-date-error'

export class StartDate extends DateValueObject {
	constructor(readonly value: Date) {
		super(value)

		this.validateStartDate(value)
	}

	static isValid(value: Date): boolean {
		const currentDate = new Date()

		return value <= currentDate
	}

	private validateStartDate(value: Date): void {
		if (!StartDate.isValid(value)) {
			throw new InvalidStartDateError()
		}
	}
}
