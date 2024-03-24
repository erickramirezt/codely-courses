import { InvalidArgumentError } from '../../../../../src/modules/shared/domain/errors/invalid-argument-error'
import { UserRegister } from '../../../../../src/modules/users/application/user-register'
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

describe('UserRegistrar', () => {
  it('registers a user without throwing errors when all data is valid', () => {
    const repository = new InMemoryUserRepository()
    const userRegister = new UserRegister(repository)
    const repositorySave = jest.spyOn(repository, 'save')

    userRegister.register(validId, validEmail, validBirthdate)

    expect(repositorySave).toHaveBeenCalledWith(
      new User(validId, validEmail, validBirthdate)
    )
  })

  it('throws an error when registering a user with an invalid uuid', () => {
    const repository = new InMemoryUserRepository()
    const userRegister = new UserRegister(repository)
    const repositorySave = jest.spyOn(repository, 'save')

    const invalidId = 'invalid-uuid'

    const register = (): void => {
      userRegister.register(invalidId, validEmail, validBirthdate)
    }

    expect(register).toThrow(InvalidArgumentError)
    expect(repositorySave).not.toHaveBeenCalled()
  })

  it('throws an error when registering a user with an invalid email', () => {
    const repository = new InMemoryUserRepository()
    const userRegister = new UserRegister(repository)
    const repositorySave = jest.spyOn(repository, 'save')

    const invalidEmail = 'invalid-email'

    const register = (): void => {
      userRegister.register(validId, invalidEmail, validBirthdate)
    }

    expect(register).toThrow(InvalidArgumentError)
    expect(repositorySave).not.toHaveBeenCalled()
  })

  it('throws an error when registering a user with an invalid email domain', () => {
    const repository = new InMemoryUserRepository()
    const userRegister = new UserRegister(repository)
    const repositorySave = jest.spyOn(repository, 'save')

    const invalidEmail = 'invalid-email@invalid-domain.com'

    const register = (): void => {
      userRegister.register(validId, invalidEmail, validBirthdate)
    }

    expect(register).toThrow(InvalidArgumentError)
    expect(repositorySave).not.toHaveBeenCalled()
  })

  it('throws an error when registering a user older than 110 years', () => {
    const repository = new InMemoryUserRepository()
    const userRegister = new UserRegister(repository)
    const repositorySave = jest.spyOn(repository, 'save')

    const invalidBirthdate = new Date()
    invalidBirthdate.setFullYear(invalidBirthdate.getFullYear() - 111)

    const register = (): void => {
      userRegister.register(validId, validEmail, invalidBirthdate)
    }

    expect(register).toThrow(InvalidArgumentError)
    expect(repositorySave).not.toHaveBeenCalled()
  })

  it('throws an error when registering a user younger than 18 years', () => {
    const repository = new InMemoryUserRepository()
    const userRegister = new UserRegister(repository)
    const repositorySave = jest.spyOn(repository, 'save')

    const invalidBirthdate = new Date()
    invalidBirthdate.setFullYear(invalidBirthdate.getFullYear() - 17)

    const register = (): void => {
      userRegister.register(validId, validEmail, invalidBirthdate)
    }

    expect(register).toThrow(InvalidArgumentError)
    expect(repositorySave).not.toHaveBeenCalled()
  })
})
