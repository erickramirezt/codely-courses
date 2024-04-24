import { APIRequestContext, request } from '@playwright/test'

export const baseApiTestRoute = `http://localhost:3000`

export async function getContext(): Promise<APIRequestContext> {
	return await request.newContext({ baseURL: baseApiTestRoute })
}
