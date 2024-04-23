import { CourseCreator } from '../../../../../src/modules/courses/application/create/course-creator'
import { InvalidCourseIdError } from '../../../../../src/modules/courses/domain/errors/invalid-course-id-error'
import { InvalidCourseNameError } from '../../../../../src/modules/courses/domain/errors/invalid-course-name-error'
import { CourseMother } from '../../domain/model/course-mother'
import { CourseRepositoryMock } from '../../infrastructure/persistence/course-repository-mock'
import { CreateCourseRequestMother } from './create-course-request-mother'

let repository: CourseRepositoryMock
let creator: CourseCreator

beforeEach(() => {
	repository = new CourseRepositoryMock()
	creator = new CourseCreator(repository)
})

describe('CourseCreator', () => {
	it('should create a valid course', async () => {
		const request = CreateCourseRequestMother.create()

		const course = CourseMother.fromCreateCourseRequest(request)

		await creator.run(request)

		repository.assertSaveHasBeenCalledWith(course)
		repository.assertLastSavedCourseIs(course)
	})

	it('should throw an error if course id is invalid', () => {
		expect(() => {
			const request = CreateCourseRequestMother.createWithInvalidId()
			const course = CourseMother.fromCreateCourseRequest(request)

			void creator.run(request)

			repository.assertLastSavedCourseIs(course)
		}).toThrow(InvalidCourseIdError.message)
	})

	it('should throw an error if course name length is exceeded', () => {
		expect(() => {
			const request = CreateCourseRequestMother.createWithTooLongName()
			const course = CourseMother.fromCreateCourseRequest(request)

			void creator.run(request)

			repository.assertLastSavedCourseIs(course)
		}).toThrow(InvalidCourseNameError.message)
	})

	// TODO: COURSE DURATION VALIDATION
})
