import { DateValueObject } from '../../../shared/domain/value-objects/date-value-object'
import { InvalidArgumentError } from '../../../shared/domain/errors/invalid-argument-error'
import { Generation, type GenerationName } from './generation'

export class UserBirthdate extends DateValueObject {
  constructor (readonly value: Date) {
    super(value)
    this.validateBirthdate(value)
  }

  toPrimitives (): Date {
    return this.value
  }

  generation (): GenerationName {
    return Generation.from(this.value)
  }

  validateBirthdate (value: Date): void {
    const currentDate = new Date()
    let ageInYears = currentDate.getFullYear() - value.getFullYear()

    if (
      currentDate.getMonth() < value.getMonth() ||
      (currentDate.getMonth() === value.getMonth() &&
        currentDate.getDate() < value.getDate())
    ) {
      ageInYears--
    }

    if (ageInYears < 18 || ageInYears > 110) {
      throw new InvalidArgumentError(
        `The value [${value.toString()}] is not a valid birthdate.`
      )
    }
  }
}
