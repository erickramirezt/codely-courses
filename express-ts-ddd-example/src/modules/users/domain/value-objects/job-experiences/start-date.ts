import { BadRequestError } from '../../../../shared/domain/errors/bad-request-error'
import { DateValueObject } from '../../../../shared/domain/value-objects/value-object/date-value-object'

export class StartDate extends DateValueObject {
	constructor(readonly value: Date) {
		super(value)

		this.validateStartDate(value)
	}

	private validateStartDate(value: Date): void {
		const currentDate = new Date()

		if (value > currentDate) {
			throw new BadRequestError('La fecha de inicio no puede ser mayor a la fecha actual')
		}
	}
}
