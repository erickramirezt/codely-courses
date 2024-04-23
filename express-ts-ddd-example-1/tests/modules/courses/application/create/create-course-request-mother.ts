import { type CourseCreatorRequest } from '../../../../../src/modules/courses/application/create/course-creator'
import { type CourseDuration } from '../../../../../src/modules/courses/domain/value-objects/course-duration'
import { type CourseId } from '../../../../../src/modules/courses/domain/value-objects/course-id'
import { type CourseName } from '../../../../../src/modules/courses/domain/value-objects/course-name'
import { CourseDurationMother } from '../../domain/value-objects/course-duration-mother'
import { CourseIdMother } from '../../domain/value-objects/course-id-mother'
import { CourseNameMother } from '../../domain/value-objects/course-name-mother'
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
      CourseIdMother.create(),
      CourseNameMother.create(),
      CourseDurationMother.create()
    )
  },

  invalidRequest (): CourseCreatorRequest {
    return this.create(
      CourseIdMother.create(),
      CourseNameMother.create(CourseNameMother.invalidName()),
      CourseDurationMother.create()
    )
  }
}
