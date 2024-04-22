import { Course } from '../../../../../src/modules/courses/domain/model/course'
import { CourseDuration } from '../../../../../src/modules/courses/domain/value-objects/course-duration'
import { CourseName } from '../../../../../src/modules/courses/domain/value-objects/course-name'
import { FileCourseRepository } from '../../../../../src/modules/courses/infrastructure/persistence/file-course-repository'
import { Uuid } from '../../../../../src/modules/shared/domain/value-objects/uuid'

describe('FileCourseRepository', () => {
  it('should save a course', async () => {
    const repository = new FileCourseRepository()
    const expectedCourse = new Course({
      id: new Uuid(crypto.randomUUID()),
      // id: new Uuid('id'),
      name: new CourseName('name'),
      duration: new CourseDuration('duration')
    })

    await repository.save(expectedCourse)

    const course = await repository.search(expectedCourse.id)
    expect(course).toEqual(expectedCourse)
  })
})
