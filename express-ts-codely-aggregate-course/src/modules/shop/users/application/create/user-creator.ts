import { User } from '../../domain/model/user'
import { type UserRepository } from '../../domain/repository/user-repository'

export class UserCreator {
  constructor (private readonly repository: UserRepository) {}

  async run (id: string, name: string, profilePicture: string): Promise<void> {
    const user = User.create(id, name, profilePicture)
    await this.repository.save(user)
  }
}
