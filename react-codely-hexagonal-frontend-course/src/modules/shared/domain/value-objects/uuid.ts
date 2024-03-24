import { InternalServerError } from '../errors/internal-server-error'
import { StringValueObject } from './value-object/string-value-object'

export class Uuid extends StringValueObject {
  private readonly validUuidRegexExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi

  constructor (readonly value: string) {
    super(value)
    this.validateUuid(value)
  }

  private validateUuid (value: string): void {
    if (this.validUuidRegexExp.test(value)) {
      throw new InternalServerError(this.invalidUuidMessage(value))
    }
  }

  invalidUuidMessage (value: string): string {
    return `El valor [${value}] no es un UUID válido.`
  }
}
