import { User, UserPrimitives } from '../../../../../src/modules/users/domain/model/user'
import { UserBirthdateMother } from '../value-objects/user-birthdate-mother'
import { UserEmailMother } from '../value-objects/user-email-mother'
import { UserIdMother } from '../value-objects/user-id-mother'

export const UserMother = {
	create(params?: Partial<UserPrimitives>): User {
		const defaultParams: UserPrimitives = {
			id: UserIdMother.create().value,
			email: UserEmailMother.create().value,
			birthdate: UserBirthdateMother.create().value,
			jobExperiences: [],
			...params
		}

		return User.fromPrimitives({
			id: defaultParams.id,
			email: defaultParams.email,
			birthdate: defaultParams.birthdate,
			jobExperiences: defaultParams.jobExperiences
		})
	}
}
