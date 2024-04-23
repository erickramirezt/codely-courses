import { StringValueObject } from '../../../shared/domain/value-objects/value-object/string-value-object'
import { InvalidCourseNameError } from '../errors/invalid-course-name-error'

export class CourseName extends StringValueObject {
	static maxLength = 30

	constructor(readonly value: string) {
		super(value)
		this.validateCourseName(value)
	}

	static isValid(value: string): boolean {
		return value.length <= CourseName.maxLength
	}

	private validateCourseName(value: string): void {
		if (!CourseName.isValid(value)) {
			throw new InvalidCourseNameError()
		}
	}
}
