import { type CreateCourseRequest } from '../../../../../src/modules/courses/application/create/course-creator'
import { type CourseDuration } from '../../../../../src/modules/courses/domain/value-objects/course-duration'
import { type CourseId } from '../../../../../src/modules/courses/domain/value-objects/course-id'
import { type CourseName } from '../../../../../src/modules/courses/domain/value-objects/course-name'
import { CourseDurationMother } from '../../domain/value-objects/course-duration-mother'
import { CourseIdMother } from '../../domain/value-objects/course-id-mother'
import { CourseNameMother } from '../../domain/value-objects/course-name-mother'

interface CreateParams {
  id: CourseId
  name: CourseName
  duration: CourseDuration
}

export const CreateCourseRequestMother = {
  create (params?: Partial<CreateParams>): CreateCourseRequest {
    const course: CreateParams = {
      id: CourseIdMother.create(),
      name: CourseNameMother.create(),
      duration: CourseDurationMother.create(),
      ...params
    }
    return {
      id: course.id.value,
      name: course.name.value,
      duration: course.duration.value
    }
  },
  createWithInvalidId (): CreateCourseRequest {
    return this.create({
      id: CourseIdMother.create(CourseIdMother.createInvalid())
    })
  },
  createWithInvalidName (): CreateCourseRequest {
    return this.create({
      name: CourseNameMother.create(CourseNameMother.createInvalid())
    })
  },
  createWithInvalidDuration (): CreateCourseRequest {
    return this.create({
      duration: CourseDurationMother.create(
        CourseDurationMother.createInvalid()
      )
    })
  }
}
