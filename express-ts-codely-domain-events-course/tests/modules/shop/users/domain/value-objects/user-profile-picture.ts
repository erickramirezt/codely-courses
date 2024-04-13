import { faker } from '@faker-js/faker'
import { UserProfilePicture } from '../../../../../../src/modules/shop/users/domain/value-objects/user-profile-picture'

export const UserProfilePictureMother = {
  create (value?: string): UserProfilePicture {
    return new UserProfilePicture(value ?? faker.image.url())
  }
}
