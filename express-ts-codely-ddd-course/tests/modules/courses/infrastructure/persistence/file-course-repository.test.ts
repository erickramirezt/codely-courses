import { Course } from '../../../../../src/modules/courses/domain/entity/course'
import { FileCourseRepository } from '../../../../../src/modules/courses/infrastructure/persistence/file-course-repository'
import { Uuid } from '../../../../../src/modules/shared/domain/value-objects/uuid'

describe('FileCourseRepository', () => {
  it('should save a course', async () => {
    const repository = new FileCourseRepository()
    const expectedCourse = new Course({
      id: new Uuid(crypto.randomUUID()),
      // id: new Uuid('id'),
      name: 'name',
      duration: 'duration'
    })

    await repository.save(expectedCourse)

    const course = await repository.search(expectedCourse.id.value)
    expect(course).toEqual(expectedCourse)
  })
})
