import test, { APIRequestContext, expect } from '@playwright/test'

import { BASE_API_ROUTE } from '../../../../src/app/shared/routes/load-api-endpoints'
import { getContext } from '../../shared/api/api-test'

let api: APIRequestContext

test.beforeEach(async () => {
	api = await getContext()
})

test('get api status', async () => {
	const res = await api.get(BASE_API_ROUTE)
	expect(res.status()).toBe(200)
})
