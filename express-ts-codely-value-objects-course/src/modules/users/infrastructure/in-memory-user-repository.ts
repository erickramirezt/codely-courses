import { type User } from '../domain/model/user'
import { type UserRepository } from '../domain/repository/user-repository'
import { type UserEmail } from '../domain/value-objects/user-email'

export class InMemoryUserRepository implements UserRepository {
  private readonly users: User[] = []

  save (user: User): void {
    this.users.push(user)
  }

  search (userEmail: UserEmail): User | null {
    return (
      this.users.find((user) => user.emailValue === userEmail.value) ??
      null
    )
  }
}
