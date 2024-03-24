import { StatusCodes } from 'http-status-codes'
import { COURSES_API_ROUTE } from '../../../src/app/constants'
import { api } from '../shared'
import { CreateCourseRequestMother } from '../../modules/courses/application/create/create-course-request-mother'

test('I send a PUT with body', async () => {
  const body = CreateCourseRequestMother.random()
  const response = await api
    .put(`${COURSES_API_ROUTE}/${body.id}`)
    .send(body)
    .expect(StatusCodes.CREATED)

  expect(response.body).toStrictEqual({})
})

test('An invalid non existence course', async () => {
  const id = crypto.randomUUID()
  // const id = '123'

  const body = {
    name: 5,
    duration: '5 hours',
    id
  }

  await api
    .put(`${COURSES_API_ROUTE}/${body.id}`)
    .send(body)
    .expect(StatusCodes.UNPROCESSABLE_ENTITY)
})
