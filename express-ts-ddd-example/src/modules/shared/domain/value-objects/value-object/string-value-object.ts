import { InvalidStringValueError } from '../../errors/invalid-string-value-error'
import { ValueObject } from './value-object'

export abstract class StringValueObject extends ValueObject<string> {
  constructor (readonly value: string) {
    super(value)
    this.validateString(value)
  }

  private validateString (value: string): void {
    if (!StringValueObject.isValid(value)) {
      throw new InvalidStringValueError()
    }
  }

  static isValid (value: string): boolean {
    return typeof value === 'string'
  }
}
