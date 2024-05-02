import { Company } from './company'
import { DateRange } from './date-range'
import { Title } from './title'

export class JobExperience {
	// TODO: UPDATE PROPERTIES TO BE PUBLIC AND REFACTOR CONSTURCTOR TO USE VALUE OBJECTS
	company: Company
	title: Title
	dateRange: DateRange

	constructor(company: string, title: string, startDate: Date, endDate: Date | null) {
		this.company = new Company(company)
		this.title = new Title(title)
		this.dateRange = new DateRange(startDate, endDate)
	}

	// TODO: ADD STATIC METHOD TO CREATE JOB EXPERIENCE FROM PRIMITIVES

	// TODO: ADD METHOD TO RETURN PRIMITIVES

	get startDate(): Date {
		return this.dateRange.startDate.value
	}

	get endDate(): Date | null {
		return this.dateRange.endDate?.value ?? null
	}
}
