import express from 'express'
import cors from 'cors'
import { loadApiEndpoints } from './app/shared/routes/load-api-endpoints'
import { notFoundHandlerMiddleware } from './app/shared/middlewares/not-found-handler-middleware'
import { errorHandlerMiddleware } from './app/shared/middlewares/error-handler-middleware'

const app = express()

app.set('port', process.env.PORT ?? 3000)
app.use(express.json())
app.use(cors())

loadApiEndpoints(app)

app.use(notFoundHandlerMiddleware)
app.use(errorHandlerMiddleware)

export default app
