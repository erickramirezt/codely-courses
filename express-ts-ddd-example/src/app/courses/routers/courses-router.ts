import { Router } from 'express'

import { putCourseController } from '../controllers/put-course-controller'

const coursesRouter = Router()

coursesRouter.put('/:id', putCourseController)

export { coursesRouter }
