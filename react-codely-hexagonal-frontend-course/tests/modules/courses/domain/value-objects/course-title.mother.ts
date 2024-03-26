import { StringMother } from '../../../shared/domain/value-objects/mother-creator/string-mother'
import { CourseTitle } from '../../../../../src/modules/courses/domain/value-objects/course-title'

export const CourseTitleMother = {
  create(value?: string): CourseTitle {
    return new CourseTitle(
      value ??
        StringMother.word({
          min: CourseTitle.MIN_COURSE_LENGTH,
          max: CourseTitle.MAX_COURSE_LENGTH,
        })
    )
  },

  createTooShort(): string {
    return StringMother.word({ max: CourseTitle.MIN_COURSE_LENGTH - 1 })
  },

  createTooLong(): string {
    return StringMother.word({
      min: CourseTitle.MAX_COURSE_LENGTH + 1,
      max: CourseTitle.MAX_COURSE_LENGTH + 10,
    })
  },
}
