import { User, type UserPrimitives } from '../../../../../../src/modules/shop/users/domain/model/user'
import { UserEmailMother } from '../value-objects/user-email-mother'
import { UserIdMother } from '../value-objects/user-id-mother'
import { UserNameMother } from '../value-objects/user-name-mother'
import { UserProfilePictureMother } from '../value-objects/user-profile-picture'

export const UserMother = {
  create (params?: Partial<UserPrimitives>) {
    const primitives: UserPrimitives = {
      id: UserIdMother.create().value,
      email: UserEmailMother.create().value,
      name: UserNameMother.create().value,
      profilePicture: UserProfilePictureMother.create().value,
      ...params
    }

    return User.fromPrimitives(primitives)
  }
}
