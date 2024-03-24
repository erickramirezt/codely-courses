import { Router } from 'express'
import { getStatusController } from '../../controllers/status/get-status-controller'

const statusRouter = Router()

statusRouter.get('/', getStatusController)

export { statusRouter }
