import { CourseName } from '../../../../../../src/modules/courses/domain/value-objects/course-name/course-name'
import { WordMother } from '../../../../shared/domain/value-objects/word-mother'

export const CourseNameMother = {
  create (value: string): CourseName {
    return new CourseName(value)
  },

  random (): CourseName {
    return this.create(WordMother.random({ maxLength: 30 }))
  },

  invalidName (): string {
    return 'a'.repeat(40)
  }
}
