import { InvalidArgumentError } from '../../../shared/domain/errors/invalid-argument-error'
import { StringValueObject } from '../../../shared/domain/value-objects/string-value-object'

export class UserEmail extends StringValueObject {
  private readonly validEmailRegExp =
    /^(?=.*[@](?:gmail\.com|hotmail\.com)$)[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9_-]*$/

  constructor (readonly value: string) {
    super(value)
    this.validateEmail(value)
  }

  toPrimitives (): string {
    return this.value
  }

  private validateEmail (value: string): void {
    if (!this.validEmailRegExp.test(value)) {
      throw new InvalidArgumentError(`The value [${value}] is not a valid email.`)
    }
  }
}
