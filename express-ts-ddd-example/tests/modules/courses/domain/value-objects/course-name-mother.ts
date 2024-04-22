import { CourseName } from '../../../../../src/modules/courses/domain/value-objects/course-name'
import { StringMother } from '../../../shared/domain/value-objects/mother-creator/string-mother'

export const CourseNameMother = {
  create (value: string): CourseName {
    return new CourseName(value)
  },

  random (): CourseName {
    return this.create(StringMother.word({ max: 30 }))
  },

  invalidName (): string {
    return 'a'.repeat(40)
  }
}
