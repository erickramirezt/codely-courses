import { Uuid } from '../../../../../src/modules/shared/domain/value-objects/uuid'
import { MotherCreator } from './mother-creator/mother-creator'
import { StringMother } from './mother-creator/string-mother'

export const UuidMother = {
	create(value?: string): Uuid {
		return new Uuid(value ?? MotherCreator.string.uuid())
	},

	createInvalid(): string {
		return StringMother.word({ max: 10 })
	}
}
