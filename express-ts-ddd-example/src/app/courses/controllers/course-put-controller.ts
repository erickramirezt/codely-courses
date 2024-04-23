import { StatusCodes } from 'http-status-codes'

import { courseCreator } from '../../../modules/courses/infrastructure/dependencies'
import { Controller } from '../../shared/controllers/controller'

interface CoursePutRequestBody {
	id: string
	name: string
	duration: string
}

export const coursePutController: Controller = async (req, res) => {
	const { duration, id, name } = req.body as CoursePutRequestBody
	try {
		courseCreator.run({ duration, id, name })
		res.status(StatusCodes.OK).send()
	} catch {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).send()
	}
}
