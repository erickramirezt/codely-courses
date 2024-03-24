export abstract class IntValueObject {
  readonly value: number

  constructor (value: number) {
    this.value = value
  }

  toString (): string {
    return String(this.value)
  }
}
