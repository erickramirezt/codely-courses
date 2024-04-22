import { AggregateRoot } from '../../../shared/domain/model/aggregate-root'
import { CourseDuration } from '../value-objects/course-duration'
import { CourseId } from '../value-objects/course-id'
import { CourseName } from '../value-objects/course-name'

export interface CoursePrimitives {
  id: string
  name: string
  duration: string
}

export class Course extends AggregateRoot<CoursePrimitives> {
  constructor (
    readonly id: CourseId,
    readonly name: CourseName,
    readonly duration: CourseDuration
  ) {
    super()
  }

  static fromPrimitives (primitives: {
    id: string
    name: string
    duration: string
  }): Course {
    return new Course(
      new CourseId(primitives.id),
      new CourseName(primitives.name),
      new CourseDuration(primitives.duration)
    )
  }

  public toPrimitives (): CoursePrimitives {
    return {
      id: this.id.value,
      name: this.name.value,
      duration: this.duration.value
    }
  }
}
