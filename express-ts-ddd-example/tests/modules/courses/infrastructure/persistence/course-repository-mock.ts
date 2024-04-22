import { Course } from '../../../../../src/modules/courses/domain/model/course'
import { type CourseRepository } from '../../../../../src/modules/courses/domain/repository/course-repository'

export class CourseRepositoryMock implements CourseRepository {
  private readonly mockSave = jest.fn()

  async save (course: Course): Promise<void> {
    await this.mockSave(course)
  }

  assertSaveHasBeenCalledWith (expected: Course): void {
    expect(this.mockSave).toHaveBeenCalledWith(expected)
  }

  assertLastSavedCourseIs (expected: Course): void {
    const mock = this.mockSave.mock
    const lastSavedCourse = (mock.calls[mock.calls.length - 1] as Course[])[0]
    expect(lastSavedCourse).toBeInstanceOf(Course)
    expect(lastSavedCourse.id).toEqual(expected.id)
  }
}
