import { faker } from '@faker-js/faker'

import { UserEmail } from '../../../../../src/modules/users/domain/value-objects/user-email'

export const UserEmailMother = {
	create(value?: string): UserEmail {
		const domains = ['gmail.com', 'hotmail.com']
		const randomDomain = domains[Math.floor(Math.random() * domains.length)]

		return new UserEmail(
			value ??
				faker.internet.email({
					firstName: faker.person.firstName(),
					lastName: faker.person.lastName(),
					provider: randomDomain
				})
		)
	}
}
