import { User } from '../model/user'
import { UserId } from '../value-objects/user-id'

export interface UserRepository {
	save(user: User): Promise<void>

	search(id: UserId): Promise<User | null>
}
