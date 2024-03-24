import { CourseDuration } from '../../../../../../src/modules/courses/domain/value-objects/course-duration/course-duration'
import { WordMother } from '../../../../shared/domain/value-objects/word-mother'

export const CourseDurationMother = {
  create (value: string): CourseDuration {
    return new CourseDuration(value)
  },

  random (): CourseDuration {
    return this.create(WordMother.random({ maxLength: 30 }))
  }
}
