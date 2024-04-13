import { UserRegisteredDomainEvent } from '../../../../../../src/modules/shop/users/domain/events/user-registered-domain-event'
import { type UserPrimitives } from '../../../../../../src/modules/shop/users/domain/model/user'
import { UserEmailMother } from '../value-objects/user-email-mother'
import { UserIdMother } from '../value-objects/user-id-mother'
import { UserNameMother } from '../value-objects/user-name-mother'
import { UserProfilePictureMother } from '../value-objects/user-profile-picture'

export const UserRegisteredDomainEventMother = {
  create (params?: Partial<UserPrimitives>): UserRegisteredDomainEvent {
    const primitives: UserPrimitives = {
      id: UserIdMother.create().value,
      email: UserEmailMother.create().value,
      name: UserNameMother.create().value,
      profilePicture: UserProfilePictureMother.create().value,
      ...params
    }

    return new UserRegisteredDomainEvent(
      primitives.id,
      primitives.email,
      primitives.name,
      primitives.profilePicture
    )
  }
}
