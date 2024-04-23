import { CourseCreator } from '../application/create/course-creator'
import { FileCourseRepository } from './persistence/file-course-repository'

const repository = new FileCourseRepository()
export const courseCreator = new CourseCreator(repository)
