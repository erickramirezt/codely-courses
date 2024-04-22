import { CourseDuration } from '../../../../../src/modules/courses/domain/value-objects/course-duration'
import { StringMother } from '../../../shared/domain/value-objects/mother-creator/string-mother'

export const CourseDurationMother = {
  create (value: string): CourseDuration {
    return new CourseDuration(value)
  },

  random (): CourseDuration {
    return this.create(StringMother.word({ max: 30 }))
  }
}
