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

export class User {
  private constructor (
    readonly id: UserId,
    private readonly name: UserName,
    private readonly email: UserEmail,
    private readonly profilePicture: UserProfilePicture
  ) {}

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
}
