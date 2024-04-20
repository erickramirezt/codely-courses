import { Course } from '../../domain/model/course'
import { type CourseRepository } from '../../domain/repository/course-repository'

export interface CourseCreatorRequest {
  id: string
  name: string
  duration: string
}

export class CourseCreator {
  constructor (private readonly repository: CourseRepository) {}

  async run (course: CourseCreatorRequest): Promise<void> {
    await this.repository.save(Course.fromPrimitives({ ...course }))
  }
}
