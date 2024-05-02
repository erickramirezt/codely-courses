import { User } from '../model/user'
import { UserEmail } from '../value-objects/user-email'

// TODO: UPDATE TO INTERFACE
export abstract class UserRepository {
	abstract save(user: User): Promise<void>
	abstract search(userEmal: UserEmail): Promise<User | null>
}
