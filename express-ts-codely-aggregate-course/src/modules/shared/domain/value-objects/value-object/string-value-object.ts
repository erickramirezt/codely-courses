import { BadRequestError } from '../../errors/bad-request-error'
import { ValueObject } from './value-object'

export class StringValueObject extends ValueObject<string> {
  constructor (value: string) {
    super(value)
    this.validateStringValue(value)
  }

  private validateStringValue (value: string): void {
    if (typeof value !== 'string') {
      throw new BadRequestError(this.invalidStringValueMessage(value))
    }
  }

  invalidStringValueMessage (value: string): string {
    return `El valor [${value}] no es una cadena de texto válida.`
  }
}
