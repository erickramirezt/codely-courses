import { StringValueObject } from '../../../../shared/domain/value-objects/string-value-object'
import { CourseNameLengthExceededError } from './course-name-length-exceeded-error'

export class CourseName extends StringValueObject {
  constructor (readonly value: string) {
    super(value)
    this.ensureLengthIsLessThan30Characters(value)
  }

  private ensureLengthIsLessThan30Characters (value: string): void {
    if (value.length > 30) {
      throw new CourseNameLengthExceededError(`<${value}> has more than 30 characters`)
    }
  }
}
