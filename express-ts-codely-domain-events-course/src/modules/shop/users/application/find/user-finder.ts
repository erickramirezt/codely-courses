import { type User } from '../../domain/model/user'
import { type UserRepository } from '../../domain/repository/user-repository'
import { UserId } from '../../domain/value-objects/user-id'

export class UserFinder {
  constructor (private readonly repository: UserRepository) {}

  async run (id: string): Promise<User> {
    const user = await this.repository.search(new UserId(id))

    if (user === null) {
      throw new Error('User not found')
    }

    return user
  }
}
