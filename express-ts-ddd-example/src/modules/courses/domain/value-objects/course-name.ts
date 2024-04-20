import { BadRequestError } from '../../../shared/domain/errors/bad-request-error'
import { StringValueObject } from '../../../shared/domain/value-objects/value-object/string-value-object'

export class CourseName extends StringValueObject {
  static readonly MIN_COURSE_LENGTH = 5
  static readonly MAX_COURSE_LENGTH = 40

  constructor (readonly value: string) {
    super(value)
    if (CourseName.isCourseNameValid(value)) {
      throw new BadRequestError(CourseName.invalidCourseNameMessage())
    }
  }

  static invalidCourseNameMessage (): string {
    return `The course title is invalid. It must be less than ${CourseName.MAX_COURSE_LENGTH} and more than ${CourseName.MIN_COURSE_LENGTH} characters.`
  }

  static isCourseNameValid (value: string): boolean {
    return (
      value.length <= CourseName.MAX_COURSE_LENGTH &&
      value.length >= CourseName.MIN_COURSE_LENGTH
    )
  }
}
