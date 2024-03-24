import { MongoEnvironmentArranger } from '../../../../../tests/modules/courses/infrastructure/mongo/mongo-environment-arranger'
import { MongoClientFactory } from '../../../shared/infrastructure/persistence/mongo/mongo-client-factory'
import { MongoConfigFactory } from '../../../shared/infrastructure/persistence/mongo/mongo-config-factory'
import { CourseCreator } from '../../application/create/course-creator'
import { MongoCourseRepository } from '../persistence/mongo-course-repository'
// import { FileCourseRepository } from '../persistence/file-course-repository'

const mongoConfig = MongoConfigFactory.createConfig()
const connectionManager = MongoClientFactory.createClient('mooc', mongoConfig)

// const courseRepository = new FileCourseRepository()
// export const courseCreator = new CourseCreator(fileCourseRepository)
export const courseRepository = new MongoCourseRepository(connectionManager)
export const courseCreator = new CourseCreator(courseRepository)
export const environmentArranger = new MongoEnvironmentArranger(connectionManager)
