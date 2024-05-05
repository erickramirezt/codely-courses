import { BadRequestError } from '../../../../../src/modules/shared/domain/errors/bad-request-error'
import { UserEmailUpdater } from '../../../../../src/modules/users/application/update-email'
import { UserDoesNotExistError } from '../../../../../src/modules/users/domain/errors/user-does-not-exist-error'
import { User } from '../../../../../src/modules/users/domain/model/user'
import { InMemoryUserRepository } from '../../../../../src/modules/users/infrastructure/in-memory-user-repository'
import { UserMother } from '../../domain/model/user-mother'
import { UserEmailMother } from '../../domain/value-objects/user-email-mother'

describe('UserEmailUpdater', () => {
	it('Registers a user without throwing errors when all data is valid', async () => {
		const repository = new InMemoryUserRepository()
		const userEmailUpdater = new UserEmailUpdater(repository)

		const user = UserMother.create()
		const newEmail = UserEmailMother.create()

		await repository.save(user)

		const repositorySave = jest.spyOn(repository, 'save')

		await userEmailUpdater.run(user.emailValue, newEmail.value)
		expect(repositorySave).toHaveBeenCalledWith(
			new User(user.idValue, newEmail.value, user.birthdateValue, [])
		)
	})

	it('Throws an error when the old email does not exist', async () => {
		const repository = new InMemoryUserRepository()
		const userEmailUpdater = new UserEmailUpdater(repository)
		const repositorySave = jest.spyOn(repository, 'save')

		const user = UserMother.create()
		const newEmail = UserEmailMother.create()

		const updateEmail = async (): Promise<void> => {
			await userEmailUpdater.run(user.emailValue, newEmail.value)
		}

		await expect(updateEmail).rejects.toThrow(UserDoesNotExistError)
		expect(repositorySave).not.toHaveBeenCalled()
	})

	it('Throws an error when the new email is invalid', async () => {
		const repository = new InMemoryUserRepository()
		const userEmailUpdater = new UserEmailUpdater(repository)

		const user = UserMother.create()
		const invalidNewEmail = 'newemail@invalid.com'
		await repository.save(user)
		const repositorySave = jest.spyOn(repository, 'save')

		const updateEmail = async (): Promise<void> => {
			await userEmailUpdater.run(user.emailValue, invalidNewEmail)
		}

		await expect(updateEmail).rejects.toThrow(BadRequestError)
		expect(repositorySave).not.toHaveBeenCalled()
	})
})
