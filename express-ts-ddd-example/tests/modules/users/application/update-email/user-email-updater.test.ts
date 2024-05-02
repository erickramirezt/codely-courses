import { BadRequestError } from '../../../../../src/modules/shared/domain/errors/bad-request-error'
import { UserEmailUpdater } from '../../../../../src/modules/users/application/update-email'
import { UserDoesNotExistError } from '../../../../../src/modules/users/domain/errors/user-does-not-exist-error'
import { User } from '../../../../../src/modules/users/domain/model/user'
import { InMemoryUserRepository } from '../../../../../src/modules/users/infrastructure/in-memory-user-repository'

const validId = crypto.randomUUID()
const currentDate = new Date()
const validBirthdate = new Date(
	currentDate.getFullYear() - 50,
	currentDate.getMonth(),
	currentDate.getDate()
)

describe('UserEmailUpdater', () => {
	it('Registers a user without throwing errors when all data is valid', async () => {
		const repository = new InMemoryUserRepository()
		const userEmailUpdater = new UserEmailUpdater(repository)

		const oldEmail = 'oldemail@gmail.com'
		const newEmail = 'newemail@gmail.com'
		await repository.save(new User(validId, oldEmail, validBirthdate, []))

		const repositorySave = jest.spyOn(repository, 'save')

		await userEmailUpdater.run(oldEmail, newEmail)
		expect(repositorySave).toHaveBeenCalledWith(new User(validId, newEmail, validBirthdate, []))
	})

	it('Throws an error when the old email does not exist', async () => {
		const repository = new InMemoryUserRepository()
		const userEmailUpdater = new UserEmailUpdater(repository)
		const repositorySave = jest.spyOn(repository, 'save')

		const oldEmail = 'oldemail@gmail.com'
		const newEmail = 'newemail@gmail.com'

		const updateEmail = async (): Promise<void> => {
			await userEmailUpdater.run(oldEmail, newEmail)
		}

		await expect(updateEmail).rejects.toThrow(UserDoesNotExistError)
		expect(repositorySave).not.toHaveBeenCalled()
	})

	it('Throws an error when the new email is invalid', async () => {
		const repository = new InMemoryUserRepository()
		const userEmailUpdater = new UserEmailUpdater(repository)

		const oldEmail = 'oldemail@gmail.com'
		const newEmail = 'newemail@invalid.com'
		await repository.save(new User(validId, oldEmail, validBirthdate, []))
		const repositorySave = jest.spyOn(repository, 'save')

		const updateEmail = async (): Promise<void> => {
			await userEmailUpdater.run(oldEmail, newEmail)
		}

		await expect(updateEmail).rejects.toThrow(BadRequestError)
		expect(repositorySave).not.toHaveBeenCalled()
	})
})
