import { UserEmailUpdater } from '../../../../../../src/modules/shop/users/application/update_email/user-email-updater'
import { UserDoesNotExistError } from '../../../../../../src/modules/shop/users/domain/errors/user-does-not-exist-error'
import { MockEventBus } from '../../../../shared/infrastructure/mock-event-bus'
import { UserEmailUpdatedDomainEventMother } from '../../domain/events/user-email-updated-domain-event-mother'
import { UserMother } from '../../domain/model/user-mother'
import { UserEmailMother } from '../../domain/value-objects/user-email-mother'
import { UserIdMother } from '../../domain/value-objects/user-id-mother'
import { MockUserRepository } from '../../infrastructure/mock-user-repository'

describe('UserEmailUpdater should', () => {
  const repository = new MockUserRepository()
  const eventBus = new MockEventBus()
  const userEmailUpdater = new UserEmailUpdater(repository, eventBus)

  it('throw an error if the user does not exist', async () => {
    const userId = UserIdMother.create()
    const email = UserEmailMother.create()

    repository.shouldNotSearch(userId)

    await expect(
      userEmailUpdater.run(userId.value, email.value)
    ).rejects.toThrow(new UserDoesNotExistError(userId.value))
  })

  it('update the email of an existing user', async () => {
    const existingUser = UserMother.create()
    const newEmail = UserEmailMother.create()

    const userWithNewEmail = UserMother.create({
      ...existingUser.toPrimitives(),
      email: newEmail.value
    })

    const expectDomainEvent = UserEmailUpdatedDomainEventMother.create({
      email: newEmail.value,
      id: existingUser.id.value
    })

    repository.shouldSearch(existingUser)
    repository.shouldSave(userWithNewEmail)
    eventBus.shouldPublish([expectDomainEvent])

    await userEmailUpdater.run(existingUser.id.value, newEmail.value)
  })
})
