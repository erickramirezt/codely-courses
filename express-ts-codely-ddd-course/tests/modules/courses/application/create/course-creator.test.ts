import { CourseCreator } from '../../../../../src/modules/courses/application/create/course-creator'
import { CourseNameLengthExceededError } from '../../../../../src/modules/courses/domain/value-objects/course-name/course-name-length-exceeded-error'
import { CourseMother } from '../../domain/entity/course-mother'
import { CourseRepositoryMock } from '../../mocks/course-repository-mock'
import { CreateCourseRequestMother } from './create-course-request-mother'

let repository: CourseRepositoryMock
let creator: CourseCreator

beforeEach(() => {
  repository = new CourseRepositoryMock()
  creator = new CourseCreator(repository)
})

describe('CourseCreator', () => {
  it('should create a valid course', async () => {
    const request = CreateCourseRequestMother.random()

    const course = CourseMother.fromRequest(request)

    await creator.run(request)

    repository.assertSaveHasBeenCalledWith(course)
    repository.assertLastSavedCourseIs(course)
  })

  it('should throw an error if course name length is exceeded', async () => {
    expect(() => {
      const request = CreateCourseRequestMother.invalidRequest()
      const course = CourseMother.fromRequest(request)

      void creator.run(request)

      repository.assertLastSavedCourseIs(course)
    }).toThrow(CourseNameLengthExceededError)
  })
})
