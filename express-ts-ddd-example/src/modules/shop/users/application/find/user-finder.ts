import { NotFoundError } from '../../../../shared/domain/errors/not-found-error'
import { User } from '../../domain/model/user'
import { UserRepository } from '../../domain/repository/user-repository'
import { UserId } from '../../domain/value-objects/user-id'

export interface FindUserRequest {
	id: string
}

export class UserFinder {
	constructor(private readonly repository: UserRepository) {}

	async run(request: FindUserRequest): Promise<User> {
		const user = await this.repository.search(new UserId(request.id))

		if (!user) {
			throw new NotFoundError('User not found')
		}

		return user
	}
}
