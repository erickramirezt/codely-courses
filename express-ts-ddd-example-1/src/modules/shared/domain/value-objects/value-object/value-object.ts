import { InvalidValueError } from '../../errors/invalid-value-error'

type Primitives = string | number | boolean | Date

export abstract class ValueObject<T extends Primitives> {
  constructor (readonly value: T) {
    this.validateValue(value)
  }

  private validateValue (value: T): void {
    if (!this.isValueValid(value)) {
      throw new InvalidValueError()
    }
  }

  private isValueValid (value: T): boolean {
    return value !== undefined && value !== null
  }

  equals (other: ValueObject<T>): boolean {
    return (
      other.constructor.name === this.constructor.name &&
      other.value === this.value
    )
  }

  toString (): string {
    return this.value.toString()
  }
}
