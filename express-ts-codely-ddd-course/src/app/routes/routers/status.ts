import { Router } from 'express'
import { getStatus } from '../../controllers/status'

const statusRouter = Router()

statusRouter.get('/', getStatus)

export { statusRouter }
