import { User } from '../../domain/model/user'
import { UserRepository } from '../../domain/repository/user-repository'
import { UserId } from '../../domain/value-objects/user-id'

export interface SearchUserRequest {
	id: string
}

export class UserSearcher {
	constructor(private readonly repository: UserRepository) {}

	async run(request: SearchUserRequest): Promise<User | null> {
		return await this.repository.search(new UserId(request.id))
	}
}
