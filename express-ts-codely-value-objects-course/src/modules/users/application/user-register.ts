import { User } from '../domain/model/user'
import { type UserRepository } from '../domain/repository/user-repository'

export class UserRegister {
  constructor (private readonly repository: UserRepository) {}

  register (id: string, email: string, birthdate: Date): void {
    const user = new User(id, email, birthdate)

    this.repository.save(user)
  }
}
