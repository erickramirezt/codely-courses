import { User } from '../../domain/model/user'
import { UserRepository } from '../../domain/repository/user-repository'

export class UserRegister {
	constructor(private readonly repository: UserRepository) {}

	async run(id: string, email: string, birthdate: Date): Promise<void> {
		const user = new User(id, email, birthdate, [])

		await this.repository.save(user)
	}
}
