import { Company } from './company'
import { DateRange } from './date-range'
import { Title } from './title'

export class JobExperience {
  company: Company
  title: Title
  dateRange: DateRange

  constructor (
    company: string,
    title: string,
    startDate: Date,
    endDate: Date | null
  ) {
    this.company = new Company(company)
    this.title = new Title(title)
    this.dateRange = new DateRange(startDate, endDate)
  }

  get startDate (): Date {
    return this.dateRange.startDate.value
  }

  get endDate (): Date | null {
    return this.dateRange.endDate?.value ?? null
  }
}
