import { BadRequestError } from '../../../shared/domain/errors/bad-request-error'
import { StringValueObject } from '../../../shared/domain/value-objects/value-object/string-value-object'

export class CourseName extends StringValueObject {
  static readonly MAX_COURSE_LENGTH = 30

  constructor (readonly value: string) {
    super(value)
    if (CourseName.isCourseNameValid(value)) {
      throw new BadRequestError(CourseName.invalidCourseNameMessage())
    }
  }

  static invalidCourseNameMessage (): string {
    return `The course title is invalid. It must be less than ${CourseName.MAX_COURSE_LENGTH} characters.`
  }

  static isCourseNameValid (value: string): boolean {
    return value.length <= CourseName.MAX_COURSE_LENGTH
  }
}
