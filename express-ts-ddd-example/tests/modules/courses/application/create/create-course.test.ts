import { CourseCreator } from '../../../../../src/modules/courses/application/create/course-creator'
import { CourseDuration } from '../../../../../src/modules/courses/domain/value-objects/course-duration'
import { CourseName } from '../../../../../src/modules/courses/domain/value-objects/course-name'
import { InternalServerError } from '../../../../../src/modules/shared/domain/errors/internal-server-error'
import { CourseMother } from '../../domain/model/course-mother'
import { CourseRepositoryMock } from '../../infrastructure/persistence/course-repository-mock'
import { CreateCourseRequestMother } from './create-course-request-mother'

let repository: CourseRepositoryMock
let creator: CourseCreator

// TODO: CREATE CUSTOM ERRORS

beforeEach(() => {
  repository = new CourseRepositoryMock()
  creator = new CourseCreator(repository)
})

describe('CreateCourse', () => {
  it('should create a valid course', async () => {
    const request = CreateCourseRequestMother.create()
    const course = CourseMother.fromCreateCourseRequest(request)
    await creator.run(request)
    repository.assertSaveHasBeenCalledWith(course)
    repository.assertLastSavedCourseId(course)
  })
  it('should throw an error if the course name is invalid', async () => {
    expect(async () => {
      const request = CreateCourseRequestMother.createWithInvalidName()
      const course = CourseMother.fromCreateCourseRequest(request)

      await creator.run(request)

      repository.assertLastSavedCourseId(course)
    }).toThrow(InternalServerError)
  })
  it('should throw an error if the course name is invalid', async () => {
    expect(async () => {
      const request = CreateCourseRequestMother.createWithInvalidName()
      const course = CourseMother.fromCreateCourseRequest(request)

      await creator.run(request)

      repository.assertLastSavedCourseId(course)
    }).toThrow(CourseName.invalidCourseNameMessage())
  })
  it('should throw an error if the course duration is invalid', async () => {
    expect(async () => {
      const request = CreateCourseRequestMother.createWithInvalidDuration()
      const course = CourseMother.fromCreateCourseRequest(request)

      await creator.run(request)

      repository.assertLastSavedCourseId(course)
    }).toThrow(CourseDuration.invalidStringValueMessage())
  })
})
