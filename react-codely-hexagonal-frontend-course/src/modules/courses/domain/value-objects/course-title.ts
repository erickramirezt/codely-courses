import { BadRequestError } from '@/modules/shared/domain/errors/bad-request-error'
import { StringValueObject } from '@/modules/shared/domain/value-objects/value-object/string-value-object'

export class CourseTitle extends StringValueObject {
  static readonly MIN_COURSE_LENGTH = 5
  static readonly MAX_COURSE_LENGTH = 40

  constructor(readonly value: string) {
    super(value)
    if (!CourseTitle.isValid(value)) {
      throw new BadRequestError(CourseTitle.invalidMessage(value))
    }
  }

  static isValid(value: string) {
    return (
      value.length <= CourseTitle.MAX_COURSE_LENGTH &&
      value.length >= CourseTitle.MIN_COURSE_LENGTH
    )
  }

  static invalidMessage(value: string) {
    return `The title [${value}] is invalid. It must be less than ${CourseTitle.MAX_COURSE_LENGTH} characters and more than ${CourseTitle.MIN_COURSE_LENGTH}.`
  }
}
