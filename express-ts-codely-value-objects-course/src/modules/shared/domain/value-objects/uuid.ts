import { InvalidArgumentError } from '../errors/invalid-argument-error'
import { StringValueObject } from './string-value-object'

export class Uuid extends StringValueObject {
  private readonly validUuidRegExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi

  constructor (readonly value: string) {
    super(value)
    this.validateUuid(value)
  }

  public static random (): Uuid {
    return new Uuid(crypto.randomUUID())
  }

  private validateUuid (value: string): void {
    if (!this.validUuidRegExp.test(value)) {
      throw new InvalidArgumentError(this.invalidMessage(value))
    }
  }

  invalidMessage (value: string): string {
    return `The value [${value}] is not a valid UUID.`
  }
}
