import { UserDoesNotExistError } from '../../domain/errors/user-does-not-exist-error'
import { type User } from '../../domain/model/user'
import { type UserRepository } from '../../domain/repository/user-repository'
import { UserId } from '../../domain/value-objects/user-id'

export class UserFinder {
  constructor (private readonly repository: UserRepository) {}

  async run (id: string): Promise<User> {
    const user = await this.repository.search(new UserId(id))

    if (user === null) {
      throw new UserDoesNotExistError(id)
    }

    return user
  }
}
