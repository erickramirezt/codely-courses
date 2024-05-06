import { Company } from './company'
import { DateRange } from './date-range'
import { Title } from './title'

export interface JobExperiencePrimitives {
	company: string
	title: string
	startDate: Date
	endDate: Date | null
}

export class JobExperience {
	constructor(
		private readonly company: Company,
		private readonly title: Title,
		private readonly dateRange: DateRange
	) {
		this.company = company
		this.title = title
		this.dateRange = DateRange.fromPrimitives({
			startDate: dateRange.startDateValue,
			endDate: dateRange.endDateValue
		})
	}

	static fromPrimitives(primitives: JobExperiencePrimitives): JobExperience {
		return new JobExperience(
			new Company(primitives.company),
			new Title(primitives.title),
			DateRange.fromPrimitives({
				startDate: primitives.startDate,
				endDate: primitives.endDate
			})
		)
	}

	toPrimitives(): JobExperiencePrimitives {
		return {
			company: this.company.value,
			title: this.title.value,
			startDate: this.startDateValue,
			endDate: this.endDateValue
		}
	}

	get companyValue(): string {
		return this.company.value
	}

	get titleValue(): string {
		return this.title.value
	}

	get startDateValue(): Date {
		return this.dateRange.startDateValue
	}

	get endDateValue(): Date | null {
		return this.dateRange.endDateValue
	}
}
