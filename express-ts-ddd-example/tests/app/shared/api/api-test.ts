import { APIRequestContext, request } from '@playwright/test'

export const BASE_API_ROUTE_TEST = `http://localhost:3000`

export async function getContext({ baseURL }: { baseURL: string }): Promise<APIRequestContext> {
	return await request.newContext({ baseURL })
}
