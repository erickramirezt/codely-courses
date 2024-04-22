type Primitives = string | number | boolean | Date

export abstract class ValueObject<T extends Primitives> {
  readonly value: T

  constructor (value: T) {
    this.value = value
    this.ensureValueIsDefined()
  }

  private ensureValueIsDefined (): void {
    if (this.value === undefined || this.value === null) {
      throw new Error('Value is undefined')
    }
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
