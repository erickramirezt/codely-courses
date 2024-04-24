import { Router } from 'express'

import { baseApiRoute } from '../../shared/routes/load-api-endpoints'
import { putCourseController } from '../controllers/put-course-controller'

const coursesApiRoute = `${baseApiRoute}/courses`

const coursesRouter = Router()

coursesRouter.put('/:id', putCourseController)

export { coursesApiRoute, coursesRouter }
