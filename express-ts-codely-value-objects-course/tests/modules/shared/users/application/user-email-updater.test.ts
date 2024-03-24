import { InvalidArgumentError } from '../../../../../src/modules/shared/domain/errors/invalid-argument-error'
import { UserEmailUpdater } from '../../../../../src/modules/users/application/user-email-updater'
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
  it('Registers a user without throwing errors when all data is valid', () => {
    const repository = new InMemoryUserRepository()
    const userEmailUpdater = new UserEmailUpdater(repository)

    const oldEmail = 'oldemail@gmail.com'
    const newEmail = 'newemail@gmail.com'
    repository.save(new User(validId, oldEmail, validBirthdate))

    const repositorySave = jest.spyOn(repository, 'save')

    userEmailUpdater.update(oldEmail, newEmail)

    expect(repositorySave).toHaveBeenCalledWith(
      new User(validId, newEmail, validBirthdate)
    )
  })

  it('Throws an error when the old email does not exist', () => {
    const repository = new InMemoryUserRepository()
    const userEmailUpdater = new UserEmailUpdater(repository)
    const repositorySave = jest.spyOn(repository, 'save')

    const oldEmail = 'oldemail@gmail.com'
    const newEmail = 'newemail@gmail.com'

    const updateEmail = (): void => {
      userEmailUpdater.update(oldEmail, newEmail)
    }

    expect(updateEmail).toThrow(UserDoesNotExistError)
    expect(repositorySave).not.toHaveBeenCalled()
  })

  it('Throws an error when the new email already exists', () => {
    const repository = new InMemoryUserRepository()
    const userEmailUpdater = new UserEmailUpdater(repository)

    const oldEmail = 'oldemail@gmail.com'
    const invalidNewEmail = 'newemail@invalid.com'
    repository.save(new User(validId, oldEmail, validBirthdate))
    const repositorySave = jest.spyOn(repository, 'save')

    const updateEmail = (): void => {
      userEmailUpdater.update(oldEmail, invalidNewEmail)
    }

    expect(updateEmail).toThrow(InvalidArgumentError)
    expect(repositorySave).not.toHaveBeenCalled()
  })
})
