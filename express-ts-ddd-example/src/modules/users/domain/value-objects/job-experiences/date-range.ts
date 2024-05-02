import { BadRequestError } from '../../../../shared/domain/errors/bad-request-error'
import { EndDate } from './end-date'
import { StartDate } from './start-date'

export class DateRange {
	startDate: StartDate
	endDate: EndDate | null

	constructor(startDate: Date, endDate: Date | null) {
		this.startDate = new StartDate(startDate)
		this.endDate = endDate !== null ? new EndDate(endDate) : null

		this.validateDateRange(this.startDate, this.endDate)
	}

	// TODO: ADD STATIC METHOD TO CREATE DATE RANGE FROM PRIMITIVES

	// TODO: ADD METHOD TO RETURN PRIMITIVES

	// TODO: ADD STATIC METHOD IS VALID

	private validateDateRange(startDate: StartDate, endDate: EndDate | null) {
		// TODO: USE IS VALID STATIC METHOD AND CREATE INVALID DATE RANGE ERROR
		if (endDate !== null && startDate.value > endDate.value) {
			throw new BadRequestError('La fecha de inicio no puede ser mayor a la fecha de fin')
		}
	}
}
