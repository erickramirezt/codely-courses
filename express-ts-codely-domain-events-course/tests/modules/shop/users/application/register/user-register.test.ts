import { UserRegister } from '../../../../../../src/modules/shop/users/application/register/user-register'
import { MockEventBus } from '../../../../shared/infrastructure/mock-event-bus'
import { UserRegisteredDomainEventMother } from '../../domain/events/user-registered-domain-event-mother'
import { UserMother } from '../../domain/model/user-mother'
import { MockUserRepository } from '../../infrastructure/mock-user-repository'

describe('UserRegister should', () => {
  const repository = new MockUserRepository()
  const eventBus = new MockEventBus()
  const userRegister = new UserRegister(repository, eventBus)

  it('register a valid user', async () => {
    const expectedUser = UserMother.create()
    const expectedUserPrimitives = expectedUser.toPrimitives()

    const expectedDomainEvent = UserRegisteredDomainEventMother.create(
      expectedUserPrimitives
    )

    repository.shouldSave(expectedUser)
    eventBus.shouldPublish([expectedDomainEvent])

    await userRegister.run(
      expectedUserPrimitives.id,
      expectedUserPrimitives.name,
      expectedUserPrimitives.email,
      expectedUserPrimitives.profilePicture
    )
  })
})
