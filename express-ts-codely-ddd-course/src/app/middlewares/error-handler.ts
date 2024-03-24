import { type NextFunction, type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { type CustomApiError } from '../../modules/shared/domain/errors'

export const errorHandler = (
  error: CustomApiError,
  _: Request,
  res: Response,
  __: NextFunction
): void => {
  const customError = {
    statusCode: error.statusCode ?? StatusCodes.INTERNAL_SERVER_ERROR,
    error: error.message ?? 'Internal Server Error'
  }
  res.status(customError.statusCode).json({ error: customError.error })
}
