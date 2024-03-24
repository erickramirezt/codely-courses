import { Router } from 'express'
import { coursePutController } from '../../controllers/courses'
import { type ValidationChain, body } from 'express-validator'
import { validateSchema } from '../../middlewares/validate-schema'

const coursesRouter = Router()

const reqSchema: ValidationChain[] = [
  body('id').exists().isString(),
  body('name').exists().isString(),
  body('duration').exists().isString()
]

coursesRouter.route('/:id').put(validateSchema(reqSchema), coursePutController)

export { coursesRouter }
