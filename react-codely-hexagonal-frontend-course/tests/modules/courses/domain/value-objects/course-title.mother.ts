import { StringMother } from '../../../shared/domain/value-objects/mother-creator/string-mother'
import { CourseTitle } from '../../../../../src/modules/courses/domain/value-objects/course-title'

export const CourseTitleMother = {
  create(value?: string): CourseTitle {
    return new CourseTitle(
      value ?? StringMother.word({ max: CourseTitle.MAX_COURSE_LENGTH })
    )
  },
}
