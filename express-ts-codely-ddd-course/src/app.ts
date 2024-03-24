import express from 'express'
import cors from 'cors'
import { loadApiEndpoints } from './app/routes'
import { errorHandler, notFound } from './app/middlewares'

const app = express()

app.set('port', process.env.PORT ?? 3000)
app.use(express.json())
app.use(cors())

loadApiEndpoints(app)

app.use(notFound)
app.use(errorHandler)

export default app
