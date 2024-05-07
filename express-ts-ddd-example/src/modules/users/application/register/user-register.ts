import { User } from '../../domain/model/user'
import { UserRepository } from '../../domain/repository/user-repository'

export interface RegisterUserRequest {
	id: string
	email: string
	birthdate: Date
	jobExperiences: {
		company: string
		title: string
		startDate: Date
		endDate: Date | null
	}[]
}

export class UserRegister {
	constructor(private readonly repository: UserRepository) {}

	async run(request: RegisterUserRequest): Promise<void> {
		const user = User.fromPrimitives({
			id: request.id,
			email: request.email,
			birthdate: request.birthdate,
			jobExperiences: request.jobExperiences
		})

		await this.repository.save(user)
	}
}
