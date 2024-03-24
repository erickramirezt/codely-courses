import { AggregateRoot } from '@/modules/shared/domain/model/aggregate-root'
import { CourseId } from '../value-objects/course-id'
import { CourseTitle } from '../value-objects/course-title'
import { CourseImageUrl } from '../value-objects/course-image-url'

export interface CoursePrimitives {
  id: string
  title: string
  imageUrl: string
}

export class Course extends AggregateRoot<CoursePrimitives> {
  private constructor(
    private readonly id: CourseId,
    private readonly title: CourseTitle,
    private readonly imageUrl: CourseImageUrl
  ) {
    super()
  }

  static fromPrimitives(primitives: CoursePrimitives) {
    return new Course(
      new CourseId(primitives.id),
      new CourseTitle(primitives.title),
      new CourseImageUrl(primitives.imageUrl)
    )
  }

  idValue(): string {
		return this.id.value;
	}

	titleValue(): string {
		return this.title.value;
	}

	imageUrlValue(): string {
		return this.imageUrl.value;
	}

  toPrimitives(): CoursePrimitives {
    return {
      id: this.id.value,
      title: this.title.value,
      imageUrl: this.imageUrl.value
    }
  }
}
