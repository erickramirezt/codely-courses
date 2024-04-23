import { BadRequestError } from '../../errors/bad-request-error'

export type Primitives = string | number | boolean | Date

type Optional<T> = T | undefined | null
export abstract class ValueObject<T extends Primitives> {
	constructor(readonly value: T) {
		if (!this.isValueValid(value)) {
			throw new BadRequestError(ValueObject.invalidValueMessage())
		}
	}

	static invalidValueMessage(): string {
		return 'El valor ingresado no está definido.'
	}

	equals(other: ValueObject<T>): boolean {
		return this.value === other.value || this.constructor.name === other.constructor.name
	}

	toString(): string {
		return this.value.toString()
	}

	private isValueValid(value: Optional<T>): boolean {
		return value !== undefined && value !== null
	}
}
