import { type Application } from 'express'
import { BASE_API_ROUTE } from '../constants/api-routes'
import { statusRouter } from './routers/status-router'

export const loadApiEndpoints = (app: Application): void => {
  app.use(BASE_API_ROUTE, statusRouter)
}
