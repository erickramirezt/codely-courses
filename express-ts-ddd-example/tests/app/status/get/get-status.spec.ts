import test, { APIRequestContext, expect } from '@playwright/test'

import { BASE_API_ROUTE } from '../../../../src/app/shared/constants/api-routes'
import { BASE_API_ROUTE_TEST, getContext } from '../../shared/api/api-test'

let api: APIRequestContext

test.beforeEach(async () => {
	api = await getContext({ baseURL: BASE_API_ROUTE_TEST })
})

test('get api status', async () => {
	const res = await api.get(BASE_API_ROUTE)
	expect(res.status()).toBe(200)
})
