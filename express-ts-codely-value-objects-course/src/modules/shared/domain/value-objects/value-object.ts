import { InvalidArgumentError } from '../errors/invalid-argument-error'

export type Primitives = string | number | boolean | Date

type Optional<T> = T | null | undefined

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

  private validateValue (value: Optional<T>): void {
    if (value === null || value === undefined) {
      throw new InvalidArgumentError('Value must be defined')
    }
  }
}
