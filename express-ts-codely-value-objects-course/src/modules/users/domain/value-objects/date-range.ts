import { InvalidArgumentError } from '../../../shared/domain/errors/invalid-argument-error'
import { EndDate } from './end-date'
import { StartDate } from './start-date'

export class DateRange {
  startDate: StartDate
  endDate: EndDate | null

  constructor (startDate: Date, endDate: Date | null) {
    this.startDate = new StartDate(startDate)
    this.endDate = endDate != null ? new EndDate(endDate) : null

    this.validateDateRange(this.startDate, this.endDate)
  }

  private validateDateRange (
    startDate: StartDate,
    endDate: EndDate | null
  ): void {
    if (endDate !== null && startDate > endDate) {
      throw new InvalidArgumentError(
        `[${startDate.toString()}-${endDate.toString()}] is not a valid date range.`
      )
    }
  }
}
