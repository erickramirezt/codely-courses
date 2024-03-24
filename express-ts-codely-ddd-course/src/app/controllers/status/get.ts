import { StatusCodes } from 'http-status-codes'
import { type Controller } from '../index'

export const getStatus: Controller = (_, res, next) => {
  try {
    res.status(StatusCodes.OK).send()
  } catch (error) {
    next(error)
  }
}
