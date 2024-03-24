import { type EntitySchema } from 'typeorm'
import { type Nullable } from '../../../shared/domain/nullable'
import { type Course } from '../../domain/entity/course'
import { type CourseRepository } from '../../domain/repository/course-repository'
import { TypeOrmRepository } from '../../../shared/infrastructure/persistence/typeorm/type-orm-repository'

export class TypeOrmCourseRepository
  extends TypeOrmRepository<Course>
  implements CourseRepository {
  async save (course: Course): Promise<void> {
    await this.persist(course)
  }

  async search (id: string): Promise<Nullable<Course>> {
    const repository = await this.repository()

    const course = await repository.findOne({ where: { id } })

    return course
  }

  protected entitySchema (): EntitySchema<Course> {
    return CourseEntity
  }
}
