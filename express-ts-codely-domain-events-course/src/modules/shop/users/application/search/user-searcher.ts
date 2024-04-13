import { type User } from '../../domain/model/user'
import { type UserRepository } from '../../domain/repository/user-repository'
import { UserId } from '../../domain/value-objects/user-id'

export class UserSearcher {
  constructor (private readonly repository: UserRepository) {}

  async run (id: string): Promise<User | null> {
    return await this.repository.search(new UserId(id))
  }
}
