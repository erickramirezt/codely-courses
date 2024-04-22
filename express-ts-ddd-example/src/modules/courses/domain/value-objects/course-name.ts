import { StringValueObject } from "../../../shared/domain/value-objects/value-object/string-value-object"
import { InvalidNameError } from "../errors/invalid-name-error"

export class CourseName extends StringValueObject {
  constructor (readonly value: string) {
    super(value)
    this.ensureLengthIsLessThan30Characters(value)
  }

  private ensureLengthIsLessThan30Characters (value: string): void {
    if (value.length > 30) {
      throw new InvalidNameError(`<${value}> has more than 30 characters`)
    }
  }
}
