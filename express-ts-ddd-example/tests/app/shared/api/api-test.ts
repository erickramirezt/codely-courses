import { APIRequestContext, request } from '@playwright/test'

export const BASE_API_ROUTE_TEST = `http://localhost:3000`

export async function getContext(): Promise<APIRequestContext> {
	return await request.newContext({ baseURL: BASE_API_ROUTE_TEST })
}
