import { faker } from '@faker-js/faker'

import { UserBirthdate } from '../../../../../src/modules/users/domain/value-objects/user-birthdate'

export const UserBirthdateMother = {
	create(value?: Date): UserBirthdate {
		return new UserBirthdate(value ?? faker.date.birthdate({ mode: 'age', min: 18, max: 110 }))
	}
}
