import { CourseId } from '../../../../../src/modules/courses/domain/value-objects/course-id'
import { StringMother } from '../../../shared/domain/value-objects/mother-creator/string-mother'
import { UuidMother } from '../../../shared/domain/value-objects/uuid-mother'

export const CourseIdMother = {
  create (value?: string): CourseId {
    return new CourseId(value ?? UuidMother.create().value)
  },
  createInvalid (): string {
    return StringMother.word({ max: 15 })
  }
}
