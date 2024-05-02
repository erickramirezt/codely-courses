import { User } from '../domain/model/user'
import { UserRepository } from '../domain/repository/user-repository'
import { UserEmail } from '../domain/value-objects/user-email'

export class InMemoryUserRepository implements UserRepository {
	private readonly users: User[] = []

	async save(user: User): Promise<void> {
		this.users.push(user)

		return Promise.resolve()
	}

	async search(userEmal: UserEmail): Promise<User | null> {
		const user = this.users.find((u) => u.emailValue === userEmal.value)

		return Promise.resolve(user ?? null)
	}
}
