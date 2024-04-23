import { type Application } from 'express'

import { statusRouter } from '../../status/routers/status-router'

export const BASE_API_ROUTE = '/api-backend'

export const loadApiEndpoints = (app: Application): void => {
	app.use(BASE_API_ROUTE, statusRouter)
}
