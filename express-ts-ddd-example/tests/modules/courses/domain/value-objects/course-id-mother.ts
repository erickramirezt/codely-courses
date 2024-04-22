import { CourseId } from '../../../../../src/modules/courses/domain/value-objects/course-id'
import { UuidMother } from '../../../shared/domain/value-objects/uuid-mother'

export const CourseIdMother = {
  create (value?: string): CourseId {
    return new CourseId(value ?? UuidMother.create().value)
  }
}
