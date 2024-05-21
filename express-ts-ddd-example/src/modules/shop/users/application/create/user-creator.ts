import { User } from '../../domain/model/user'
import { UserRepository } from '../../domain/repository/user-repository'

export interface CreateUserRequest {
	id: string
	name: string
	profilePicture: string
}

export class UserCreator {
	constructor(private readonly repository: UserRepository) {}

	async run(request: CreateUserRequest): Promise<void> {
		const user = User.fromPrimitives({ ...request })
		await this.repository.save(user)
	}
}
