import { ImageMother } from '../../../shared/domain/value-objects/mother-creator/image-mother'
import { CourseImageUrl } from '../../../../../src/modules/courses/domain/value-objects/course-image-url'
import { StringMother } from '../../../shared/domain/value-objects/mother-creator/string-mother'

export const CourseImageUrlMother = {
  create(value?: string): CourseImageUrl {
    return new CourseImageUrl(value ?? ImageMother.url())
  },

  createInvalid(): string {
    return StringMother.word({ max: 15 })
  },
}
