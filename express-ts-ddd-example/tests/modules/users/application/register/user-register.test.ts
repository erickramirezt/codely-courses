import { BadRequestError } from '../../../../../src/modules/shared/domain/errors/bad-request-error'
import { InvalidUuidError } from '../../../../../src/modules/shared/domain/errors/invalid-uuid-error'
import { UserRegister } from '../../../../../src/modules/users/application/register/user-register'
import { User } from '../../../../../src/modules/users/domain/model/user'
import { InMemoryUserRepository } from '../../../../../src/modules/users/infrastructure/in-memory-user-repository'
import { UserMother } from '../../domain/model/user-mother'

const validJobExperiences = [
	{
		title: 'Job title',
		company: 'Company',
		startDate: new Date('2020-01-01'),
		endDate: new Date('2022-01-01')
	}
]

describe('UserRegister', () => {
	it('registers a user without throwing errors when all data is valid', async () => {
		const repository = new InMemoryUserRepository()
		const userRegister = new UserRegister(repository)
		const repositorySave = jest.spyOn(repository, 'save')

		const user = UserMother.create()
		await userRegister.run({
			id: user.idValue,
			email: user.emailValue,
			birthdate: user.birthdateValue,
			jobExperiences: validJobExperiences
		})

		expect(repositorySave).toHaveBeenCalledWith(
			User.fromPrimitives({
				id: user.idValue,
				email: user.emailValue,
				birthdate: user.birthdateValue,
				jobExperiences: validJobExperiences
			})
		)
	})

	it('throws an error when registering a user with an invalid uuid', async () => {
		const repository = new InMemoryUserRepository()
		const userRegister = new UserRegister(repository)
		const repositorySave = jest.spyOn(repository, 'save')

		const user = UserMother.create()
		const invalidId = 'invalid-uuid'

		const register = async (): Promise<void> => {
			await userRegister.run({
				id: invalidId,
				email: user.emailValue,
				birthdate: user.birthdateValue,
				jobExperiences: validJobExperiences
			})
		}

		await expect(register).rejects.toThrow(InvalidUuidError)
		expect(repositorySave).not.toHaveBeenCalled()
	})

	it('throws an error when registering a user with an invalid email', async () => {
		const repository = new InMemoryUserRepository()
		const userRegister = new UserRegister(repository)
		const repositorySave = jest.spyOn(repository, 'save')

		const user = UserMother.create()
		const invalidEmail = 'invalid-email'

		const register = async (): Promise<void> => {
			await userRegister.run({
				id: user.idValue,
				email: invalidEmail,
				birthdate: user.birthdateValue,
				jobExperiences: validJobExperiences
			})
		}

		await expect(register).rejects.toThrow(BadRequestError)
		expect(repositorySave).not.toHaveBeenCalled()
	})

	it('throws an error when registering a user with an invalid email domain', async () => {
		const repository = new InMemoryUserRepository()
		const userRegister = new UserRegister(repository)
		const repositorySave = jest.spyOn(repository, 'save')

		const user = UserMother.create()
		const invalidEmail = 'invalid-email@invalid-domain.com'

		const register = async (): Promise<void> => {
			await userRegister.run({
				id: user.idValue,
				email: invalidEmail,
				birthdate: user.birthdateValue,
				jobExperiences: validJobExperiences
			})
		}

		await expect(register).rejects.toThrow(BadRequestError)
		expect(repositorySave).not.toHaveBeenCalled()
	})

	it('throws an error when registering a user older than 110 years', async () => {
		const repository = new InMemoryUserRepository()
		const userRegister = new UserRegister(repository)
		const repositorySave = jest.spyOn(repository, 'save')

		const user = UserMother.create()
		const invalidBirthdate = new Date()
		invalidBirthdate.setFullYear(invalidBirthdate.getFullYear() - 111)

		const register = async (): Promise<void> => {
			await userRegister.run({
				id: user.idValue,
				email: user.emailValue,
				birthdate: invalidBirthdate,
				jobExperiences: validJobExperiences
			})
		}

		await expect(register).rejects.toThrow(BadRequestError)
		expect(repositorySave).not.toHaveBeenCalled()
	})

	it('throws an error when registering a user younger than 18 years', async () => {
		const repository = new InMemoryUserRepository()
		const userRegister = new UserRegister(repository)
		const repositorySave = jest.spyOn(repository, 'save')

		const user = UserMother.create()
		const invalidBirthdate = new Date()
		invalidBirthdate.setFullYear(invalidBirthdate.getFullYear() - 18)
		invalidBirthdate.setMonth(11)
		invalidBirthdate.setDate(31)

		const currentDate = new Date()
		// If the test runs on January 1st, adjust the birthdate to make the user still 17 years old
		if (currentDate.getMonth() === 0 && currentDate.getDate() === 1) {
			invalidBirthdate.setFullYear(invalidBirthdate.getFullYear() - 1)
		}

		const register = async (): Promise<void> => {
			await userRegister.run({
				id: user.idValue,
				email: user.emailValue,
				birthdate: invalidBirthdate,
				jobExperiences: validJobExperiences
			})
		}

		await expect(register).rejects.toThrow(BadRequestError)
		expect(repositorySave).not.toHaveBeenCalled()
	})

	it('throws an error when registering a user with a job experience that has a startedDate later than the current date', async () => {
		const repository = new InMemoryUserRepository()
		const userRegister = new UserRegister(repository)
		const repositorySave = jest.spyOn(repository, 'save')

		const currentDate = new Date()
		const invalidStartDate = new Date(currentDate.getFullYear() + 1, 0, 1)

		const user = UserMother.create()
		const invalidJobExperiences = [
			{
				...validJobExperiences[0],
				startDate: invalidStartDate
			}
		]

		const register = async (): Promise<void> => {
			await userRegister.run({
				id: user.idValue,
				email: user.emailValue,
				birthdate: user.birthdateValue,
				jobExperiences: invalidJobExperiences
			})
		}

		await expect(register).rejects.toThrow(BadRequestError)
		expect(repositorySave).not.toHaveBeenCalled()
	})

	it('throws an error when registering a user with a job experience that has an endDate earlier than the startDate', async () => {
		const repository = new InMemoryUserRepository()
		const userRegister = new UserRegister(repository)
		const repositorySave = jest.spyOn(repository, 'save')

		const currentDate = new Date()
		const startDate = new Date(currentDate.getFullYear() - 1, 0, 1)
		const endDate = new Date(currentDate.getFullYear() - 2, 0, 1)

		const invalidJobExperiences = [
			{
				...validJobExperiences[0],
				startDate,
				endDate
			}
		]

		const user = UserMother.create()

		const register = async (): Promise<void> => {
			await userRegister.run({
				id: user.idValue,
				email: user.emailValue,
				birthdate: user.birthdateValue,
				jobExperiences: invalidJobExperiences
			})
		}

		await expect(register).rejects.toThrow(BadRequestError)
		expect(repositorySave).not.toHaveBeenCalled()
	})
})
