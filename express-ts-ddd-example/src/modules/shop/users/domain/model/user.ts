import { AggregateRoot } from '../../../../shared/domain/model/aggregate-root'
import { UserId } from '../value-objects/user-id'
import { UserName } from '../value-objects/user-name'
import { UserProfilePicture } from '../value-objects/user-profile-picture'

export interface UserPrimitives {
	id: string
	name: string
	profilePicture: string
}

export class User extends AggregateRoot<UserPrimitives> {
	constructor(
		private readonly id: UserId,
		private readonly name: UserName,
		private readonly profilePicture: UserProfilePicture
	) {
		super()
	}

	static fromPrimitives(primitives: UserPrimitives): User {
		return new User(
			new UserId(primitives.id),
			new UserName(primitives.name),
			new UserProfilePicture(primitives.profilePicture)
		)
	}

	toPrimitives(): UserPrimitives {
		return {
			id: this.id.value,
			name: this.name.value,
			profilePicture: this.profilePicture.value
		}
	}
}
