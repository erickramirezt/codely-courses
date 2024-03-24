import { Course } from '../../domain/model/course'
import { CourseRepository } from '../../domain/repository/course-repository'

export class CourseCreator {
  constructor(private readonly repository: CourseRepository) {}

  async run(request: { id: string; title: string; imageUrl: string }) {
    const course = Course.fromPrimitives(request)
    await this.repository.save(course)
  }
}
