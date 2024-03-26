import { ImageMother } from "../../../shared/domain/value-objects/mother-creator/image-mother"
import { CourseImageUrl } from "../../../../../src/modules/courses/domain/value-objects/course-image-url"

export const CourseImageUrlMother = {
  create(value?: string): CourseImageUrl {
    return new CourseImageUrl(value ?? ImageMother.url())
  },
}