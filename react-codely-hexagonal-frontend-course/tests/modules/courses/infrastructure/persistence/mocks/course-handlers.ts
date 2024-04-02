import { http, HttpResponse } from 'msw'
import { ApiCourseRepository } from '../../../../../../src/modules/courses/infrastructure/api-course-repository'
import {
  Course,
  CoursePrimitives,
} from '../../../../../../src/modules/courses/domain/model/course'

const courses = new Map<string, Course>()

export const courseHandlers = [
  http.get(ApiCourseRepository.baseUrl, () => {
    return HttpResponse.json(Array.from(courses.values()))
  }),
  http.get(`${ApiCourseRepository.baseUrl}/:id`, ({ params }) => {
    const { id } = params
    const course = courses.get(id.toString())
    if (!course) {
      return HttpResponse.json(null, { status: 404 })
    }
    return HttpResponse.json(course.toPrimitives())
  }),
  http.post(ApiCourseRepository.baseUrl, async ({ request }) => {
    const newCourse = (await request.json()) as CoursePrimitives
    courses.set(newCourse.id, Course.fromPrimitives(newCourse))
    return new HttpResponse(null, { status: 201 })
  }),
]
