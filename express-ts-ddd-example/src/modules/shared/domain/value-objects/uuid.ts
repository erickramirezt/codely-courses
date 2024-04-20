import { InternalServerError } from '../errors/internal-server-error'
import { StringValueObject } from './value-object/string-value-object'

export class Uuid extends StringValueObject {
  constructor (readonly value: string) {
    super(value)
    if (!Uuid.isUuuidValid(value)) {
      throw new InternalServerError(Uuid.invalidUuidMessage())
    }
  }

  private static isUuuidValid (value: string): boolean {
    return Uuid.validUuidRegexExp.test(value)
  }

  private static invalidUuidMessage (): string {
    return 'El UUID ingresado no es válido.'
  }

  private static readonly validUuidRegexExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi
}
