import { BadRequestError } from '../../errors/bad-request-error'

export type Primitives = string | number | boolean | Date

export abstract class ValueObject<T extends Primitives> {
  constructor (readonly value: T) {
    if (!this.isValueValid(value)) {
      throw new BadRequestError(ValueObject.invalidValueMessage())
    }
  }

  equals (other: ValueObject<T>): boolean {
    return (
      this.value === other.value ||
      this.constructor.name === other.constructor.name
    )
  }

  toString (): string {
    return this.value.toString()
  }

  private isValueValid (value: T): boolean {
    return value !== undefined && value !== null
  }

  static invalidValueMessage (): string {
    return 'El valor ingresado no está definido.'
  }
}
