import { UserEmailUpdatedDomainEvent, type UserEmailUpdatedDomainEventPrimitives } from '../../../../../../src/modules/shop/users/domain/events/user-email-updated-domain-event'
import { UserEmailMother } from '../value-objects/user-email-mother'
import { UserIdMother } from '../value-objects/user-id-mother'

export const UserEmailUpdatedDomainEventMother = {
  create (params?: Partial<UserEmailUpdatedDomainEventPrimitives>): UserEmailUpdatedDomainEvent {
    const primitives: UserEmailUpdatedDomainEventPrimitives = {
      id: UserIdMother.create().value,
      email: UserEmailMother.create().value,
      ...params
    }

    return new UserEmailUpdatedDomainEvent(
      primitives.id,
      primitives.email
    )
  }
}
