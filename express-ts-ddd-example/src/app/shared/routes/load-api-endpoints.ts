import { type Application } from 'express'

import { coursesRouter } from '../../courses/routers/courses-router'
import { statusRouter } from '../../status/routers/status-router'
import { baseApiRoute, coursesApiRoute } from './routes'

export const loadApiEndpoints = (app: Application): void => {
	app.use(baseApiRoute, statusRouter)
	app.use(coursesApiRoute, coursesRouter)
}
