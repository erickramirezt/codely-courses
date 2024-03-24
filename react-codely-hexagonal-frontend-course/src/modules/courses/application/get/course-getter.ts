import { CourseRepository } from '../../domain/repository/course-repository'
import { CourseId } from '../../domain/value-objects/course-id'

export class CourseGetter {
  constructor(private readonly repository: CourseRepository) {}

  async run(request: { id: string }) {
    return this.repository.get(new CourseId(request.id))
  }
}
