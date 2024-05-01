import { ValueObject } from './value-object'

export class DateValueObject extends ValueObject<Date> {
	// TODO: ADD CONSTRUCTOR WITH PRIVATE VALIDATION METHOD

	toString(): string {
		return this.value.toISOString()
	}

	// TODO: ADD IS VALID STATIC METHOD

	// TODO: ADD VALIDATE DATE PRIVATE METHOD AND CREATE INVALID DATE VALUE ERROR
}
