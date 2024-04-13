import {
  Course,
  CoursePrimitives,
} from '../../../../../src/modules/courses/domain/model/course'
import { CourseIdMother } from '../value-objects/course-id-mother'
import { CourseImageUrlMother } from '../value-objects/course-image-url-mother'
import { CourseTitleMother } from '../value-objects/course-title-mother'

export const CourseMother = {
  create(params?: Partial<CoursePrimitives>): Course {
    const primitives: CoursePrimitives = {
      id: CourseIdMother.create().value,
      title: CourseTitleMother.create().value,
      imageUrl: CourseImageUrlMother.create().value,
      ...params,
    }

    return Course.fromPrimitives(primitives)
  },
}
