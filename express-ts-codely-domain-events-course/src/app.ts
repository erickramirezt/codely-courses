import express from 'express'
import cors from 'cors'
import { loadApiEndpoints } from './app/routes/load-api-endpoints'
import { notFoundHandlerMiddleware } from './app/middlewares/not-found-handler-middleware'
import { errorHandlerMiddleware } from './app/middlewares/error-handler-middleware'

const app = express()

app.set('port', process.env.PORT ?? 3000)
app.use(express.json())
app.use(cors())

loadApiEndpoints(app)

app.use(notFoundHandlerMiddleware)
app.use(errorHandlerMiddleware)

export default app
