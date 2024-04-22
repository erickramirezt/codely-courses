import { Course } from "../../domain/model/course"
import { CourseRepository } from "../../domain/repository/course-repository"
import { CourseDuration } from "../../domain/value-objects/course-duration"
import { CourseId } from "../../domain/value-objects/course-id"
import { CourseName } from "../../domain/value-objects/course-name"


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
    const course = new Course({
      id: new CourseId(request.id),
      name: new CourseName(request.name),
      duration: new CourseDuration(request.duration)
    })
    await this.repository.save(course)
  }
}
