import { faker } from '@faker-js/faker'
import { UserEmail } from '../../../../../../src/modules/shop/users/domain/value-objects/user-email'

export const UserEmailMother = {
  create (value?: string): UserEmail {
    return new UserEmail(value ?? faker.internet.email())
  }
}
