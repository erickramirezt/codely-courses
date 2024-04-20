import { CourseCreator } from '../../application/create/course-creator'
import { FileCourseRepository } from '../persistence/file-course-repository'

export const courseRepository = new FileCourseRepository()
export const courseCreator = new CourseCreator(courseRepository)
