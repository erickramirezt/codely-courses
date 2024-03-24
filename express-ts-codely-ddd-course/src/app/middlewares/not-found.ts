import { type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'

export const NOT_FOUND_MESSAGE = 'Resource Not Found'

export const notFound = (_: Request, res: Response): void => {
  res.status(StatusCodes.NOT_FOUND).json({
    error: NOT_FOUND_MESSAGE
  })
}
