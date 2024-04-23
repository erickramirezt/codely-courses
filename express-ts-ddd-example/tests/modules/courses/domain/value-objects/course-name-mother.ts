import { CourseName } from '../../../../../src/modules/courses/domain/value-objects/course-name'
import { StringMother } from '../../../shared/domain/value-objects/mother-creator/string-mother'

export const CourseNameMother = {
	create(value?: string): CourseName {
		return new CourseName(value ?? StringMother.word({ max: CourseName.maxLength }))
	},

	createTooLong(): string {
		return StringMother.words({ number: 7 })
	}
}
