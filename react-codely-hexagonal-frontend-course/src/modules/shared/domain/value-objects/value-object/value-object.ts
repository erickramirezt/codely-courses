import { BadRequestError } from '../../errors/bad-request-error'

export type Primitives = string | number | boolean | Date

export abstract class ValueObject<T extends Primitives> {
  constructor (readonly value: T) {
    this.validateValue(value)
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

  private validateValue (value: T): void {
    if (value === undefined || value === null) {
      throw new BadRequestError(this.invalidValueMessage(value))
    }
  }

  invalidValueMessage (value: T): string {
    return `El valor [${value}] no es un valor válido.`
  }
}
