import { type CreateCourseRequest } from '../../../../../src/modules/courses/application/create/course-creator'
import { CoursePrimitives } from '../../../../../src/modules/courses/domain/model/course'
import { CourseDurationMother } from '../../domain/value-objects/course-duration-mother'
import { CourseIdMother } from '../../domain/value-objects/course-id-mother'
import { CourseNameMother } from '../../domain/value-objects/course-name-mother'

export const CreateCourseRequestMother = {
	create(params?: Partial<CoursePrimitives>): CreateCourseRequest {
		const course: CoursePrimitives = {
			id: CourseIdMother.create().value,
			name: CourseNameMother.create().value,
			duration: CourseDurationMother.create().value,
			...params
		}

		return {
			id: course.id,
			name: course.name,
			duration: course.duration
		}
	},

	createWithInvalidId(): CreateCourseRequest {
		return this.create({
			id: CourseIdMother.createInvalid()
		})
	},
	createWithTooLongName(): CreateCourseRequest {
		return this.create({
			name: CourseNameMother.createTooLong()
		})
	},
	createWithInvalidDuration(): CreateCourseRequest {
		return this.create({
			duration: CourseDurationMother.createInvalid()
		})
	}
}
