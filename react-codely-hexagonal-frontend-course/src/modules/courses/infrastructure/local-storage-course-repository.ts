import { Course, CoursePrimitives } from '../domain/model/course'
import { CourseRepository } from '../domain/repository/course-repository'
import { CourseId } from '../domain/value-objects/course-id'

export class LocalStorageCourseRepository implements CourseRepository {
  save(course: Course): Promise<void> {
    const courses = this.getAllFromLocalStorage()
    const coursePrimitives = course.toPrimitives()

    courses.set(coursePrimitives.id, coursePrimitives)

    localStorage.setItem(
      'courses',
      JSON.stringify(Array.from(courses.entries()))
    )

    return Promise.resolve()
  }

  get(id: CourseId): Promise<Course | null> {
    const courses = this.getAllFromLocalStorage()
    const course = courses.get(id.value)

    if (course === undefined) {
      return Promise.resolve(null)
    }

    return Promise.resolve(Course.fromPrimitives(course))
  }

  getAll(): Promise<Course[]> {
    const courses = this.getAllFromLocalStorage()

    return Promise.resolve(
      Array.from(courses.values()).map(Course.fromPrimitives)
    )
  }

  private getAllFromLocalStorage(): Map<string, CoursePrimitives> {
    const courses = localStorage.getItem('courses')
    if (courses === null) {
      return new Map()
    }
    const map = new Map(
      JSON.parse(courses) as Iterable<[string, CoursePrimitives]>
    )
    return map
  }
}
