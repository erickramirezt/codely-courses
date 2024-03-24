import { Course } from '../../../../../src/modules/courses/domain/entity/course'
import { type CourseDuration } from '../../../../../src/modules/courses/domain/value-objects/course-duration/course-duration'
import { type CourseId } from '../../../../../src/modules/courses/domain/value-objects/course-id/course-id'
import { type CourseName } from '../../../../../src/modules/courses/domain/value-objects/course-name/course-name'
import { type CourseCreatorRequest } from '../../../../../src/modules/courses/application/create/course-creator-request'
import { CourseIdMother } from '../value-objects/course-id/course-id-mother'
import { CourseNameMother } from '../value-objects/course-name/course-name-mother'
import { CourseDurationMother } from '../value-objects/course-duration/course-duration-mother'

export const CourseMother = {
  create (id: CourseId, name: CourseName, duration: CourseDuration) {
    return new Course({ id, name, duration })
  },

  fromRequest (request: CourseCreatorRequest) {
    return this.create(
      CourseIdMother.create(request.id),
      CourseNameMother.create(request.name),
      CourseDurationMother.create(request.duration)
    )
  },

  random (): Course {
    return this.create(
      CourseIdMother.random(),
      CourseNameMother.random(),
      CourseDurationMother.random()
    )
  }
}
