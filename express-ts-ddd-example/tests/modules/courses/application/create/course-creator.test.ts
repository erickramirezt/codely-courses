import { CourseCreator } from '../../../../../src/modules/courses/application/create/course-creator'
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
		const request = CreateCourseRequestMother.random()

		const course = CourseMother.fromRequest(request)

		await creator.run(request)

		repository.assertSaveHasBeenCalledWith(course)
		repository.assertLastSavedCourseIs(course)
	})

	it('should throw an error if course name length is exceeded', () => {
		expect(() => {
			const request = CreateCourseRequestMother.invalidRequest()
			const course = CourseMother.fromRequest(request)

			void creator.run(request)

			repository.assertLastSavedCourseIs(course)
		}).toThrow(Error)
	})
})
