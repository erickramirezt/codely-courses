import { InvalidDateValueError } from '../../errors/invalid-date-value-error'
import { ValueObject } from './value-object'

export class DateValueObject extends ValueObject<Date> {
	constructor(readonly value: Date) {
		super(value)
		this.validateDate(value)
	}

	static isValid(value: Date): boolean {
		return value instanceof Date
	}

	toString(): string {
		return this.value.toISOString()
	}

	// TODO: ADD VALIDATE DATE PRIVATE METHOD AND CREATE INVALID DATE VALUE ERROR
	private validateDate(value: Date): void {
		if (!DateValueObject.isValid(value)) {
			throw new InvalidDateValueError()
		}
	}
}
