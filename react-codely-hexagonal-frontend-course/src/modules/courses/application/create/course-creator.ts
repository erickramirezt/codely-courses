import { Course } from '../../domain/model/course'
import { CourseRepository } from '../../domain/repository/course-repository'

interface CourseCreatorRequest {
  id: string
  title: string
  imageUrl: string
}

export class CourseCreator {
  constructor(private readonly repository: CourseRepository) {}

  async run(request: CourseCreatorRequest) {
    const course = Course.fromPrimitives(request)
    await this.repository.save(course)
  }
}
