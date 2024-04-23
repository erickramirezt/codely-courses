import { Course } from '../../../../../src/modules/courses/domain/model/course'
import { FileCourseRepository } from '../../../../../src/modules/courses/infrastructure/persistence/file-course-repository'

describe('FileCourseRepository', () => {
	it('should save a course', async () => {
		const repository = new FileCourseRepository()
		const expectedCourse = Course.fromPrimitives({
			id: crypto.randomUUID(),
			name: 'name',
			duration: 'duration'
		})

		await repository.save(expectedCourse)

		const course = await repository.search(expectedCourse.id)
		expect(course).toEqual(expectedCourse)
	})
})
