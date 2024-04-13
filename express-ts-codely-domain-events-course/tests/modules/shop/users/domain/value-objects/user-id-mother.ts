import { faker } from '@faker-js/faker'
import { UserId } from '../../../../../../src/modules/shop/users/domain/value-objects/user-id'

export const UserIdMother = {
  create (value?: string): UserId {
    return new UserId(value ?? faker.string.uuid())
  }
}
