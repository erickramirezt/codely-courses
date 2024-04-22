import { StatusCodes } from 'http-status-codes'
import { type Controller } from '../../shared/controllers/controller'

export const getStatusController: Controller = (_, res, next) => {
  try {
    res.status(StatusCodes.OK).send()
  } catch (error) {
    next(error)
  }
}
