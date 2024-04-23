/* eslint-disable n/no-path-concat */
import fs from 'fs'
import { type CourseRepository } from '../../domain/repository/course-repository'
import { deserialize, serialize } from 'v8'
import { Course } from '../../domain/model/course'
import { type CourseId } from '../../domain/value-objects/course-id'

export class FileCourseRepository implements CourseRepository {
  private readonly FILE_PATH = `${__dirname}/courses`

  async save (course: Course): Promise<void> {
    await fs.promises.writeFile(
      this.filePath(course.id.value),
      serialize(course.toPrimitives())
    )
  }

  async search (courseId: CourseId): Promise<Course> {
    const courseData = await fs.promises.readFile(this.filePath(courseId.value))
    const { id, name, duration } = deserialize(courseData)
    return Course.fromPrimitives({ id, name, duration })
  }

  private filePath (id: string): string {
    return `${this.FILE_PATH}.${id}.repo`
  }
}
