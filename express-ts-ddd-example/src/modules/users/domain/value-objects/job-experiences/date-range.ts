import { InvalidDateRangeError } from '../../errors/job-experiences/invalid-date-range-error'
import { EndDate } from './end-date'
import { StartDate } from './start-date'

export interface DateRangePrimitives {
	startDate: Date
	endDate: Date | null
}

export class DateRange {
	constructor(
		private readonly startDate: StartDate,
		private readonly endDate: EndDate | null
	) {
		this.validateDateRange({
			startDate: startDate.value,
			endDate: endDate?.value ?? null
		})
	}

	static fromPrimitives(primitives: DateRangePrimitives): DateRange {
		return new DateRange(
			new StartDate(primitives.startDate),
			primitives.endDate ? new EndDate(primitives.endDate) : null
		)
	}

	static isValid(primitives: DateRangePrimitives): boolean {
		return primitives.endDate === null || primitives.startDate <= primitives.endDate
	}

	toPrimitives(): DateRangePrimitives {
		return {
			startDate: this.startDate.value,
			endDate: this.endDate?.value ?? null
		}
	}

	get startDateValue(): Date {
		return this.startDate.value
	}

	get endDateValue(): Date | null {
		return this.endDate?.value ?? null
	}

	private validateDateRange(primitives: DateRangePrimitives) {
		if (
			!DateRange.isValid({
				startDate: primitives.startDate,
				endDate: primitives.endDate ?? null
			})
		) {
			throw new InvalidDateRangeError()
		}
	}
}
