import { BadRequestError } from '../../../../../src/modules/shared/domain/errors/bad-request-error'
import { InvalidUuidError } from '../../../../../src/modules/shared/domain/errors/invalid-uuid-error'
import { UserRegister } from '../../../../../src/modules/users/application/register/user-register'
import { User } from '../../../../../src/modules/users/domain/model/user'
import { InMemoryUserRepository } from '../../../../../src/modules/users/infrastructure/in-memory-user-repository'

const validEmail = 'validemail@gmail.com'
const validId = crypto.randomUUID()
const currentDate = new Date()
const validBirthdate = new Date(
	currentDate.getFullYear() - 50,
	currentDate.getMonth(),
	currentDate.getDate()
)

describe('UserRegister', () => {
	it('registers a user without throwing errors when all data is valid', async () => {
		const repository = new InMemoryUserRepository()
		const userRegister = new UserRegister(repository)
		const repositorySave = jest.spyOn(repository, 'save')

		await userRegister.run(validId, validEmail, validBirthdate)

		expect(repositorySave).toHaveBeenCalledWith(new User(validId, validEmail, validBirthdate, []))
	})

	it('throws an error when registering a user with an invalid uuid', async () => {
		const repository = new InMemoryUserRepository()
		const userRegister = new UserRegister(repository)
		const repositorySave = jest.spyOn(repository, 'save')

		const invalidId = 'invalid-uuid'

		const register = async (): Promise<void> => {
			await userRegister.run(invalidId, validEmail, validBirthdate)
		}

		await expect(register).rejects.toThrow(InvalidUuidError)
		expect(repositorySave).not.toHaveBeenCalled()
	})

	it('throws an error when registering a user with an invalid email', async () => {
		const repository = new InMemoryUserRepository()
		const userRegister = new UserRegister(repository)
		const repositorySave = jest.spyOn(repository, 'save')

		const invalidEmail = 'invalid-email'

		const register = async (): Promise<void> => {
			await userRegister.run(validId, invalidEmail, validBirthdate)
		}

		await expect(register).rejects.toThrow(BadRequestError)
		expect(repositorySave).not.toHaveBeenCalled()
	})

	it('throws an error when registering a user with an invalid email domain', async () => {
		const repository = new InMemoryUserRepository()
		const userRegister = new UserRegister(repository)
		const repositorySave = jest.spyOn(repository, 'save')

		const invalidEmail = 'invalid-email@invalid-domain.com'

		const register = async (): Promise<void> => {
			await userRegister.run(validId, invalidEmail, validBirthdate)
		}

		await expect(register).rejects.toThrow(BadRequestError)
		expect(repositorySave).not.toHaveBeenCalled()
	})

	it('throws an error when registering a user older than 110 years', async () => {
		const repository = new InMemoryUserRepository()
		const userRegister = new UserRegister(repository)
		const repositorySave = jest.spyOn(repository, 'save')

		const invalidBirthdate = new Date(
			currentDate.getFullYear() - 111,
			currentDate.getMonth(),
			currentDate.getDate()
		)

		const register = async (): Promise<void> => {
			await userRegister.run(validId, validEmail, invalidBirthdate)
		}

		await expect(register).rejects.toThrow(BadRequestError)
		expect(repositorySave).not.toHaveBeenCalled()
	})

	it('throws an error when registering a user younger than 18 years', async () => {
		const repository = new InMemoryUserRepository()
		const userRegister = new UserRegister(repository)
		const repositorySave = jest.spyOn(repository, 'save')

		const invalidBirthdate = new Date(
			currentDate.getFullYear() - 17,
			currentDate.getMonth(),
			currentDate.getDate()
		)

		const register = async (): Promise<void> => {
			await userRegister.run(validId, validEmail, invalidBirthdate)
		}

		await expect(register).rejects.toThrow(BadRequestError)
		expect(repositorySave).not.toHaveBeenCalled()
	})

	// TODO: ADD JOB EXPERIENCES TESTS
})
