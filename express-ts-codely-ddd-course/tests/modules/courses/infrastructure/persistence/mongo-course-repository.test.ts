import { courseRepository, environmentArranger } from '../../../../../src/modules/courses/infrastructure/dependencies/persistence'
import { CourseMother } from '../../domain/entity/course-mother'

beforeEach(async () => {
  await environmentArranger.arrange()
})

afterAll(async () => {
  await environmentArranger.arrange()
  await environmentArranger.close()
})

describe('MongoCourseRepository', () => {
  describe('#save', () => {
    it('should save a course', async () => {
      const course = CourseMother.random()

      await courseRepository.save(course)
    })
  })
})
