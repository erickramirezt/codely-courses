import { validationResult, type ValidationChain } from 'express-validator'
import { type NextFunction, type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'

export function validateSchema (validations: ValidationChain[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (const validation of validations) {
      const result = await validation.run(req)
      if (!result.isEmpty()) break
    }

    const errors = validationResult(req)
    if (errors.isEmpty()) {
      next()
      return
    }

    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ errors: errors.mapped() })
  }
}
