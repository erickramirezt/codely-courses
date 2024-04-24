import { type Application } from 'express'

import { coursesApiRoute, coursesRouter } from '../../courses/routers/courses-router'
import { statusRouter } from '../../status/routers/status-router'

export const baseApiRoute = '/api-backend'

export const loadApiEndpoints = (app: Application): void => {
	app.use(baseApiRoute, statusRouter)
	app.use(coursesApiRoute, coursesRouter)
}
