import { Course } from '../../domain/model/course'
import { type CourseRepository } from '../../domain/repository/course-repository'

export interface CreateCourseRequest {
	id: string
	name: string
	duration: string
}
export class CourseCreator {
	private readonly repository: CourseRepository

	constructor(repository: CourseRepository) {
		this.repository = repository
	}

	async run(request: CreateCourseRequest): Promise<void> {
		const course = Course.fromPrimitives({ ...request })
		await this.repository.save(course)
	}
}
