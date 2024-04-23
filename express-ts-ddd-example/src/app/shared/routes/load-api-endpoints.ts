import { type Application } from 'express'

import { statusRouter } from '../../status/routers/status-router'
import { BASE_API_ROUTE } from '../constants/api-routes'

export const loadApiEndpoints = (app: Application): void => {
	app.use(BASE_API_ROUTE, statusRouter)
}
