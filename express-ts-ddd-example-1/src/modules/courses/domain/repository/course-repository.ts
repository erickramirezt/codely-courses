import { type Course } from '../entity/course'

export interface CourseRepository {
  save: (course: Course) => Promise<void>
}
