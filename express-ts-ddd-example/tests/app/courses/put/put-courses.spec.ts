import test, { APIRequestContext, expect } from '@playwright/test'
import { StatusCodes } from 'http-status-codes'

import { coursesApiRoute } from '../../../../src/app/shared/routes/routes'
// import { InvalidCourseIdError } from '../../../../src/modules/courses/domain/errors/invalid-course-id-error'
import { CreateCourseRequestMother } from '../../../modules/courses/application/create/create-course-request-mother'
import { getContext } from '../../shared/api/api-test'

let api: APIRequestContext

test.beforeAll(async () => {
	api = await getContext()
})

test('put course', async () => {
	const body = CreateCourseRequestMother.create()
	const res = await api.put(`${coursesApiRoute}/${body.id}`, {
		data: {
			...body
		}
	})
	expect(res.status()).toBe(StatusCodes.OK)
})

// TODO: REFACTOR CREATE COURSE REQUEST MOTHER AND CREATE COURSE REQUEST
// test('put course with invalid id', async () => {
// 	const body = CreateCourseRequestMother.createWithInvalidId()
// 	const res = await api.put(`${coursesApiRoute}/${body.id}`, {
// 		data: {
// 			...body
// 		}
// 	})
// 	expect(res.status()).toBe(StatusCodes.INTERNAL_SERVER_ERROR)
// 	expect(res.body()).toEqual({
// 		error: InvalidCourseIdError.message
// 	})
// })
