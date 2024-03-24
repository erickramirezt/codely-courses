import { UserId } from '../value-objects/user-id'
import { UserName } from '../value-objects/user-name'
import { UserProfilePicture } from '../value-objects/user-profile-picture'

export interface UserPrimitives {
  id: string
  name: string
  profilePicture: string
}

export class User {
  public readonly id: UserId
  public readonly name: UserName
  public readonly profilePicture: UserProfilePicture

  constructor (id: string, name: string, profilePicture: string) {
    this.id = new UserId(id)
    this.name = new UserName(name)
    this.profilePicture = new UserProfilePicture(profilePicture)
  }

  static create (id: string, name: string, profilePicture: string): User {
    return new User(id, name, profilePicture)
  }

  toPrimitives (): UserPrimitives {
    return {
      id: this.id.value,
      name: this.name.value,
      profilePicture: this.profilePicture.value
    }
  }
}
