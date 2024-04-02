import { Course, CoursePrimitives } from '../domain/model/course'
import { CourseRepository } from '../domain/repository/course-repository'
import { CourseId } from '../domain/value-objects/course-id'

export class ApiCourseRepository implements CourseRepository {
  static baseUrl = 'https://awesome-codely-courses.com/api/courses'

  async save(course: Course): Promise<void> {
    const coursePrimitives = course.toPrimitives()
    await fetch(`${ApiCourseRepository.baseUrl}`, {
      method: 'POST',
      body: JSON.stringify({
        id: coursePrimitives.id,
        name: coursePrimitives.title,
        imageUrl: coursePrimitives.imageUrl,
      }),
    })
  }

  async get(id: CourseId): Promise<Course | null> {
    const course = await fetch(
      `${ApiCourseRepository.baseUrl}/${id.value}`
    ).then((response) => response.json() as Promise<CoursePrimitives>)

    return Course.fromPrimitives(course)
  }

  async getAll(): Promise<Course[]> {
    const courses = await fetch(`${ApiCourseRepository.baseUrl}`).then(
      (response) => response.json() as Promise<CoursePrimitives[]>
    )

    return courses.map((course) => Course.fromPrimitives(course))
  }
}
