import { Course } from "../model/course";

export interface CourseRepository {
  save: (course: Course) => Promise<void>
}
