import { type NextFunction, type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError } from '../../modules/shared/domain/errors/bad-request-error'
import { NotFoundError } from '../../modules/shared/domain/errors/not-found-error'

function getErrorStatusCode ({ error }: { error: Error }): StatusCodes {
  if (error instanceof BadRequestError) {
    return StatusCodes.BAD_REQUEST
  }
  if (error instanceof NotFoundError) {
    return StatusCodes.NOT_FOUND
  }
  return StatusCodes.INTERNAL_SERVER_ERROR
}

export const errorHandlerMiddleware = (
  error: Error,
  _: Request,
  res: Response,
  __: NextFunction
): void => {
  const errorStatusCode = getErrorStatusCode({ error })
  res.status(errorStatusCode).json({ error: error.message })
}
