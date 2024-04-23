import { CourseDuration } from '../../../../../src/modules/courses/domain/value-objects/course-duration'
import { StringMother } from '../../../shared/domain/value-objects/mother-creator/string-mother'

export const CourseDurationMother = {
	create(value?: string): CourseDuration {
		return new CourseDuration(value ?? StringMother.word({ max: 30 }))
	},
	createInvalid(): string {
		return StringMother.words({ number: 7 })
	}
}
