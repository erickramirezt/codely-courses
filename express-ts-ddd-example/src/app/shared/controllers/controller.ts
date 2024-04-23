import { type NextFunction, type Request, type Response } from 'express'

export type Controller = (req: Request, res: Response, next: NextFunction) => void
