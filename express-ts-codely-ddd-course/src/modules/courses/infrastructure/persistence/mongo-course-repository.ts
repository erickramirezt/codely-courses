import { ObjectId } from 'mongodb'
import { Course } from '../../domain/entity/course'
import { type CourseRepository } from '../../domain/repository/course-repository'
import { type CourseId } from '../../domain/value-objects/course-id/course-id'
import { MongoRepository } from '../../../shared/infrastructure/persistence/mongo/mongo-repository'
import { type Nullable } from '../../../shared/domain/nullable'

export interface CourseDocument {
  _id: string
  name: string
  duration: string
}
export class MongoCourseRepository
  extends MongoRepository<Course>
  implements CourseRepository {
  public async save (course: Course): Promise<void> {
    await this.persist(course.id.value, course)
  }

  public async search (courseId: CourseId): Promise<Nullable<Course>> {
    const collection = await this.collection()
    const document = await collection.findOne<CourseDocument>({
      _id: new ObjectId(courseId.value)
    })
    return document !== null
      ? Course.fromPrimitives({
        name: document.name,
        duration: document.duration,
        id: document._id
      })
      : null
  }

  protected collectionName (): string {
    return 'courses'
  }
}
