import { Course } from "../model/course";
import { CourseId } from "../value-objects/course-id";

export interface CourseRepository {
  save(course: Course): Promise<void>

  get(id: CourseId): Promise<Course | null>

  getAll(): Promise<Course[]>
}