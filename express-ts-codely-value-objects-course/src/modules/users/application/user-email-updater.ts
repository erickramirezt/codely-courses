import { UserDoesNotExistError } from '../domain/errors/user-does-not-exist-error'
import { type UserRepository } from '../domain/repository/user-repository'
import { UserEmail } from '../domain/value-objects/user-email'

export class UserEmailUpdater {
  constructor (private readonly repository: UserRepository) {}

  update (oldEmail: string, newEmail: string): void {
    const user = this.repository.search(new UserEmail(oldEmail))

    if (user == null) {
      throw new UserDoesNotExistError(oldEmail)
    }

    user.updateEmail(newEmail)

    this.repository.save(user)
  }
}
