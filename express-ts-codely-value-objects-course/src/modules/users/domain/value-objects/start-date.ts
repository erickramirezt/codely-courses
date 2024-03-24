import { InvalidArgumentError } from '../../../shared/domain/errors/invalid-argument-error'
import { DateValueObject } from '../../../shared/domain/value-objects/date-value-object'

export class StartDate extends DateValueObject {
  constructor (readonly value: Date) {
    super(value)

    this.validateStartDate(value)
  }

  private validateStartDate (value: Date): void {
    const currentDate = new Date()

    if (value > currentDate) {
      throw new InvalidArgumentError(`[${value.toString()}] is not a valid start date.`)
    }
  }
}
