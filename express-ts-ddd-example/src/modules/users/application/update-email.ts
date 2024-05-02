import { UserDoesNotExistError } from '../domain/errors/user-does-not-exist-error'
import { UserRepository } from '../domain/repository/user-repository'
import { UserEmail } from '../domain/value-objects/user-email'

export class UserEmailUpdater {
	constructor(private readonly repository: UserRepository) {}

	async run(oldEmail: string, newEmail: string): Promise<void> {
		const user = await this.repository.search(new UserEmail(oldEmail))

		if (user === null) {
			throw new UserDoesNotExistError(oldEmail)
		}

		user.updateEmail(newEmail)

		await this.repository.save(user)
	}
}
