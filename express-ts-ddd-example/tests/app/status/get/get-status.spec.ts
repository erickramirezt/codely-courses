import test, { APIRequestContext, expect } from '@playwright/test'
import { StatusCodes } from 'http-status-codes'

import { baseApiRoute } from '../../../../src/app/shared/routes/routes'
import { getContext } from '../../shared/api/api-test'

let api: APIRequestContext

test.beforeEach(async () => {
	api = await getContext()
})

test('get api status', async () => {
	const res = await api.get(baseApiRoute)
	expect(res.status()).toBe(StatusCodes.OK)
})
