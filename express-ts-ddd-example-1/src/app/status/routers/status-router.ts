import { Router } from 'express'
import { getStatusController } from '../controllers/get-status-controller'

const statusRouter = Router()

statusRouter.get('/', getStatusController)

export { statusRouter }
