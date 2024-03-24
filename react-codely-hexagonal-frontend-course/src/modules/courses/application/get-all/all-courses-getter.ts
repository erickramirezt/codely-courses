import { CourseRepository } from "../../domain/repository/course-repository";

export class AllCoursesGetter {
  constructor(private readonly repository: CourseRepository) {}

  async run() {
    return this.repository.getAll()
  }
}