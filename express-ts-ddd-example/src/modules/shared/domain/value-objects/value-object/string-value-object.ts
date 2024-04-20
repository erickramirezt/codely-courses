import { BadRequestError } from '../../errors/bad-request-error'
import { ValueObject } from './value-object'

export class StringValueObject extends ValueObject<string> {
  constructor (readonly value: string) {
    super(value)
    if (StringValueObject.isStringValueValid(value)) {
      throw new BadRequestError(StringValueObject.invalidStringValueMessage())
    }
  }

  private static isStringValueValid (value: string): boolean {
    return typeof value === 'string'
  }

  static invalidStringValueMessage (): string {
    return 'El valor ingresado no es una cadena de texto.'
  }
}
