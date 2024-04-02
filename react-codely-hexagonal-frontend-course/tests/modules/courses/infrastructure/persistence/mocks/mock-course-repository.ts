import { vi } from "vitest";
import { Course } from "../../../../../../src/modules/courses/domain/model/course";
import { CourseRepository } from "../../../../../../src/modules/courses/domain/repository/course-repository";
import { CourseId } from "../../../../../../src/modules/courses/domain/value-objects/course-id";

export class MockCourseRepository implements CourseRepository {
  private readonly mockSave = vi.fn(); 
  private readonly mockGet = vi.fn();
  private readonly mockGetAll = vi.fn();

  async save(course: Course): Promise<void> {
    await this.mockSave(course);
  }

  get(id: CourseId): Promise<Course | null> {
    return this.mockGet(id);  
  }
  
  getAll(): Promise<Course[]> {
    return this.mockGetAll();
  }
}