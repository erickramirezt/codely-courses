import { describe, beforeAll, afterAll, afterEach, it, expect } from 'vitest'
import { server } from '../../../shared/infrastructure/persistence/mocks/server'
import { ApiCourseRepository } from '../../../../../src/modules/courses/infrastructure/api-course-repository'
import { CourseMother } from '../../../courses/domain/model/course-mother'
import { CourseIdMother } from '../../domain/value-objects/course-id-mother'

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' })
})

afterAll(() => {
  server.close()
})

afterEach(() => {
  server.resetHandlers()
})

describe('api course repository', () => {
  it('creates a course with the properties id, title and imageUrl', async () => {
    const repository = new ApiCourseRepository()

    const newCourse = CourseMother.create()

    await repository.save(newCourse)

    const course = await repository.get(
      CourseIdMother.create(newCourse.idValue)
    )

    expect(course).toEqual(newCourse)
  })
})
