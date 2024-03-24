import { AggregateRoot } from '../../../shared/domain/aggregate-root'
import { CourseDuration } from '../value-objects/course-duration/course-duration'
import { CourseId } from '../value-objects/course-id/course-id'
import { CourseName } from '../value-objects/course-name/course-name'

export class Course extends AggregateRoot {
  readonly id: CourseId
  readonly name: CourseName
  readonly duration: CourseDuration

  constructor ({
    id,
    name,
    duration
  }: {
    id: CourseId
    name: CourseName
    duration: CourseDuration
  }) {
    super()
    this.id = id
    this.name = name
    this.duration = duration
  }

  static fromPrimitives (plainData: {
    id: string
    name: string
    duration: string
  }): Course {
    return new Course({
      id: new CourseId(plainData.id),
      name: new CourseName(plainData.name),
      duration: new CourseDuration(plainData.duration)
    })
  }

  public toPrimitives (): any {
    return {
      id: this.id.value,
      name: this.name.value,
      duration: this.duration.value
    }
  }
}
