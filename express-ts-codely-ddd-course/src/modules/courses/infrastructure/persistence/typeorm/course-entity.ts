import { EntitySchema } from 'typeorm'
import { Course } from '../../../domain/entity/course'
import { CourseId } from '../../../domain/value-objects/course-id/course-id'
import { CourseName } from '../../../domain/value-objects/course-name/course-name'
import { CourseDuration } from '../../../domain/value-objects/course-duration/course-duration'
import { ValueObjetTranmsformer } from './value-object-transformer'

export const CourseEntity = new EntitySchema<Course>({
  name: 'Course',
  tableName: 'courses',
  target: Course,
  columns: {
    id: {
      type: String,
      primary: true,
      transformer: ValueObjetTranmsformer(CourseId)
    },
    name: {
      type: String,
      transformer: ValueObjetTranmsformer(CourseName)
    },
    duration: {
      type: String,
      transformer: ValueObjetTranmsformer(CourseDuration)
    }
  }
})
