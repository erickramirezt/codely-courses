import { UserArchiver } from '../../../../../../src/modules/shop/users/application/archive/user-archive'
import { UserDoesNotExistError } from '../../../../../../src/modules/shop/users/domain/errors/user-does-not-exist-error'
import { UserStatus } from '../../../../../../src/modules/shop/users/domain/value-objects/user-status'
import { MockEventBus } from '../../../../shared/infrastructure/mock-event-bus'
import { UserArchivedDomainEventMother } from '../../domain/events/user-archived-domain-event-mother'
import { UserMother } from '../../domain/model/user-mother'
import { UserIdMother } from '../../domain/value-objects/user-id-mother'
import { MockUserRepository } from '../../infrastructure/mock-user-repository'

describe('UserArchiver', () => {
  const repository = new MockUserRepository()
  const eventBus = new MockEventBus()
  const userArchiver = new UserArchiver(repository, eventBus)

  it('throw an error if the user does not exist', async () => {
    const userId = UserIdMother.create()

    repository.shouldNotSearch(userId)

    await expect(userArchiver.run(userId.value)).rejects.toThrow(new UserDoesNotExistError(userId.value))
  })

  it('archive an existing user', async () => {
    const existingUser = UserMother.create()

    const archivedUser = UserMother.create({
      ...existingUser.toPrimitives(),
      status: UserStatus.Archived
    })

    const expectDomainEvent = UserArchivedDomainEventMother.create(existingUser.id.value)

    repository.shouldSearch(existingUser)
    repository.shouldSave(archivedUser)
    eventBus.shouldPublish([expectDomainEvent])

    await userArchiver.run(existingUser.id.value)
  })
})
