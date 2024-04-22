import { Course } from '../../domain/model/course'
import { type CourseRepository } from '../../domain/repository/course-repository'

export interface CourseCreatorRequest {
  id: string
  name: string
  duration: string
}
export class CourseCreator {
  private readonly repository: CourseRepository

  constructor (repository: CourseRepository) {
    this.repository = repository
  }

  async run (request: CourseCreatorRequest): Promise<void> {
    const course = Course.fromPrimitives({ ...request })
    await this.repository.save(course)
  }
}
