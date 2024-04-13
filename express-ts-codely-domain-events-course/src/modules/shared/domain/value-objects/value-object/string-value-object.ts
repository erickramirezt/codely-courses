import { BadRequestError } from '../../errors/bad-request-error'
import { ValueObject } from './value-object'

export class StringValueObject extends ValueObject<string> {
  constructor (readonly value: string) {
    super(value)
    this.validateStringValue(value)
  }

  private validateStringValue (value: string): void {
    if (typeof value !== 'string') {
      throw new BadRequestError(StringValueObject.invalidStringValueMessage())
    }
  }

  private static invalidStringValueMessage (): string {
    return 'El valor ingresado no es una cadena de texto.'
  }
}
