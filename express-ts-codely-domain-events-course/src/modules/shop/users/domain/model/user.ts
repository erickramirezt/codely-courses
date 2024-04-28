import { AggregateRoot } from '../../../../shared/domain/model/aggregate-root'
import { UserEmailUpdatedDomainEvent } from '../events/user-email-updated-domain-event'
import { UserRegisteredDomainEvent } from '../events/user-registered-domain-event'
import { UserEmail } from '../value-objects/user-email'
import { UserId } from '../value-objects/user-id'
import { UserName } from '../value-objects/user-name'
import { UserProfilePicture } from '../value-objects/user-profile-picture'

export interface UserPrimitives {
  id: string
  name: string
  email: string
  profilePicture: string
}

export class User extends AggregateRoot<UserPrimitives> {
  private constructor (
    readonly id: UserId,
    private readonly name: UserName,
    private email: UserEmail,
    private readonly profilePicture: UserProfilePicture
  ) {
    super()
  }

  static create (primitives: UserPrimitives): User {
    const user = User.fromPrimitives(primitives)

    user.record(
      new UserRegisteredDomainEvent(
        primitives.id,
        primitives.name,
        primitives.email,
        primitives.profilePicture
      )
    )

    return user
  }

  static fromPrimitives (primitives: UserPrimitives): User {
    return new User(
      new UserId(primitives.id),
      new UserName(primitives.name),
      new UserEmail(primitives.email),
      new UserProfilePicture(primitives.profilePicture)
    )
  }

  toPrimitives (): UserPrimitives {
    return {
      id: this.id.value,
      name: this.name.value,
      email: this.email.value,
      profilePicture: this.profilePicture.value
    }
  }

  updateEmail (email: string): void {
    this.email = new UserEmail(email)

    this.record(
      new UserEmailUpdatedDomainEvent(this.id.value, this.email.value)
    )
  }
}
