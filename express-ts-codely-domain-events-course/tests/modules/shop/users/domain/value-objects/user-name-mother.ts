import { faker } from '@faker-js/faker'
import { UserName } from '../../../../../../src/modules/shop/users/domain/value-objects/user-name'

export const UserNameMother = {
  create (value?: string): UserName {
    return new UserName(value ?? faker.person.firstName())
  }
}
