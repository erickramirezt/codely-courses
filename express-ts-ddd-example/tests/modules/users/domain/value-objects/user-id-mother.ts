import { UserId } from '../../../../../src/modules/users/domain/value-objects/user-id'
import { UuidMother } from '../../../shared/domain/value-objects/uuid-mother'

export const UserIdMother = {
	create(value?: string): UserId {
		return new UserId(value ?? UuidMother.create().value)
	}
}
