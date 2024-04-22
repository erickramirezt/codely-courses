import { type CourseCreatorRequest } from '../../../../../src/modules/courses/application/create/course-creator-request'
import { Course } from '../../../../../src/modules/courses/domain/model/course'
import { type CourseDuration } from '../../../../../src/modules/courses/domain/value-objects/course-duration'
import { type CourseId } from '../../../../../src/modules/courses/domain/value-objects/course-id'
import { type CourseName } from '../../../../../src/modules/courses/domain/value-objects/course-name'
import { CourseDurationMother } from '../value-objects/course-duration-mother'
import { CourseIdMother } from '../value-objects/course-id-mother'
import { CourseNameMother } from '../value-objects/course-name-mother'

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
