import { StatusCodes } from 'http-status-codes'
import { type Controller } from '..'
import { courseCreator } from '../../../modules/courses/infrastructure/dependencies/persistence'

interface CoursePutRequestBody {
  id: string
  name: string
  duration: string
}

export const coursePutController: Controller = async (req, res) => {
  const { id, name, duration } = req.body as CoursePutRequestBody
  try {
    await courseCreator.run({ id, name, duration })
    res.status(StatusCodes.CREATED).send()
  } catch {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send()
  }
}
