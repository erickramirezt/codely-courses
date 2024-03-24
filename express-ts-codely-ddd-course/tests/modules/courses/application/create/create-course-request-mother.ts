import { type CourseCreatorRequest } from '../../../../../src/modules/courses/application/create/course-creator-request'
import { type CourseDuration } from '../../../../../src/modules/courses/domain/value-objects/course-duration/course-duration'
import { type CourseId } from '../../../../../src/modules/courses/domain/value-objects/course-id/course-id'
import { type CourseName } from '../../../../../src/modules/courses/domain/value-objects/course-name/course-name'
import { CourseDurationMother } from '../../domain/value-objects/course-duration/course-duration-mother'
import { CourseIdMother } from '../../domain/value-objects/course-id/course-id-mother'
import { CourseNameMother } from '../../domain/value-objects/course-name/course-name-mother'

export const CreateCourseRequestMother = {
  create (
    id: CourseId,
    name: CourseName,
    duration: CourseDuration
  ): CourseCreatorRequest {
    return { id: id.value, name: name.value, duration: duration.value }
  },

  random (): CourseCreatorRequest {
    return this.create(
      CourseIdMother.random(),
      CourseNameMother.random(),
      CourseDurationMother.random()
    )
  },

  invalidRequest (): CourseCreatorRequest {
    return this.create(
      CourseIdMother.random(),
      CourseNameMother.create(CourseNameMother.invalidName()),
      CourseDurationMother.random()
    )
  }
}
