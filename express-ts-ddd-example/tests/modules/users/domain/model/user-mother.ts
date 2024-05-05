import { User } from '../../../../../src/modules/users/domain/model/user'
import { UserBirthdateMother } from '../value-objects/user-birthdate-mother'
import { UserEmailMother } from '../value-objects/user-email-mother'
import { UserIdMother } from '../value-objects/user-id-mother'

interface UserParams {
	id: string
	email: string
	birthdate: Date
	jobExperiences: Array<{
		company: string
		title: string
		startDate: Date
		endDate: Date | null
	}>
}

export const UserMother = {
	create(params?: Partial<UserParams>): User {
		const defaultParams: UserParams = {
			id: UserIdMother.create().value,
			email: UserEmailMother.create().value,
			birthdate: UserBirthdateMother.create().value,
			jobExperiences: [],
			...params
		}

		return new User(
			defaultParams.id,
			defaultParams.email,
			defaultParams.birthdate,
			defaultParams.jobExperiences
		)
	}
}
