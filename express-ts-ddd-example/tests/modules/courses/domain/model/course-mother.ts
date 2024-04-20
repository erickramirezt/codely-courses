import { type CreateCourseRequest } from '../../../../../src/modules/courses/application/create/course-creator'
import {
  Course,
  type CoursePrimitives
} from '../../../../../src/modules/courses/domain/model/course'
import { CourseDurationMother } from '../value-objects/course-duration-mother'
import { CourseIdMother } from '../value-objects/course-id-mother'
import { CourseNameMother } from '../value-objects/course-name-mother'

export const CourseMother = {
  create (params?: Partial<CoursePrimitives>): Course {
    const primitives: CoursePrimitives = {
      id: CourseIdMother.create().value,
      name: CourseNameMother.create().value,
      duration: CourseDurationMother.create().value,
      ...params
    }

    return Course.fromPrimitives(primitives)
  },

  fromCreateCourseRequest (request: CreateCourseRequest): Course {
    return this.create({ ...request })
  }
}
