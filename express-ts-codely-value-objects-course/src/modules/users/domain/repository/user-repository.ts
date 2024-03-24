import { type User } from '../model/user'
import { type UserEmail } from '../value-objects/user-email'

export abstract class UserRepository {
  abstract save (user: User): void
  abstract search (userEmail: UserEmail): User | null
}
