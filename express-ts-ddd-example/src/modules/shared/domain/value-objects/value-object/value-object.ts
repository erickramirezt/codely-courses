import { InvalidValueError } from '../../errors/invalid-value-error'

export type Primitives = string | number | boolean | Date
type Optional<T> = T | undefined | null

export abstract class ValueObject<T extends Primitives> {
	constructor(readonly value: T) {
		this.validateValue(value)
	}

	equals(other: ValueObject<T>): boolean {
		return other.constructor.name === this.constructor.name && other.value === this.value
	}

	toString(): string {
		return this.value.toString()
	}

	private validateValue(value: T): void {
		if (!this.isValueValid(value)) {
			throw new InvalidValueError()
		}
	}

	private isValueValid(value: Optional<T>): boolean {
		return value !== undefined && value !== null
	}
}
