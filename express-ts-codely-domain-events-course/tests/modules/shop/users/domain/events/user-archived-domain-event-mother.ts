import { UserArchivedDomainEvent } from '../../../../../../src/modules/shop/users/domain/events/user-achived-domain-event'
import { UserIdMother } from '../value-objects/user-id-mother'

export const UserArchivedDomainEventMother = {
  create: (id?: string): UserArchivedDomainEvent =>
    new UserArchivedDomainEvent(id ?? UserIdMother.create().value)
}
